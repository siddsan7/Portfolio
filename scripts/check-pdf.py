"""Verify selectable PDF text and canonical link annotations. Requires pypdf."""
import json
import re
import subprocess
import unicodedata
from pathlib import Path
from pypdf import PdfReader

source = subprocess.check_output([
    "node", "--input-type=module", "-e",
    "import {person,projects,skills} from './src/redesign/content.js'; "
    "import {resume} from './src/redesign/resume.js'; "
    "console.log(JSON.stringify({person,projects,skills,resume}));"
], text=True, encoding="utf-8")
data = json.loads(source)
pdf = PdfReader("public/Siddharth-Sanjay-Resume.pdf")

def normalize(value):
    return re.sub(r"\s+", " ", unicodedata.normalize("NFKC", value)).strip()

text = normalize(" ".join(page.extract_text() for page in pdf.pages))
expected = [data["person"]["name"], data["person"]["email"],
            data["resume"]["education"], data["resume"]["graduation"]]
for job in data["resume"]["experience"]:
    expected.extend([job["title"], job["organization"], job["dates"], *job["bullets"]])
for project in data["projects"]:
    expected.extend([project["name"], project["summary"], project["methods"]])
for area, tools, label, href in data["skills"]:
    expected.extend([area, tools])
for fact in expected:
    assert normalize(fact) in text, f"Missing PDF text: {fact}"

links = []
for page in pdf.pages:
    for annotation in page.get("/Annots", []):
        action = annotation.get_object().get("/A")
        if action and action.get("/URI"):
            links.append(str(action["/URI"]))
assert links, "No PDF link annotations"
assert all(link.startswith(("https://", "mailto:")) for link in links), links
assert not any("localhost" in link or "127.0.0.1" in link for link in links), links
assert f'{data["person"]["domain"]}/' in links, "Clickable canonical website missing"
assert f'mailto:{data["person"]["email"]}' in links, "Clickable email missing"
for project in data["projects"]:
    assert f'{data["person"]["domain"]}/projects/{project["slug"]}/' in links
result = {"pages": len(pdf.pages), "verified_text_items": len(expected), "links": links,
          "selectable_text_characters": len(text)}
Path("docs/verification/pdf-results.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
print(f'PDF checks passed: {len(expected)} text items; {len(links)} canonical/contact links; {len(pdf.pages)} pages.')
