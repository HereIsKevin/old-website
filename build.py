import shutil
from pathlib import Path

from jinja2 import Environment, FileSystemLoader

SOURCES = Path.cwd() / "src"
OUTPUT = Path.cwd() / "public"
BLOG = SOURCES / "blog"
ARTICLES = [
    {
        "url": "thoughts-on-go.html",
        "title": "Thoughts On Go",
        "description": "By Kevin Feng - April 12, 2021",
    },
    {
        "url": "objective-rust-nope.html",
        "title": "Objective-Rust? Nope",
        "description": "By Kevin Feng - April 5, 2021",
    },
    {
        "url": "introducing-objective-rust.html",
        "title": "Introducing Objective-Rust",
        "description": "By Kevin Feng – April 1, 2021",
    },
    {
        "url": "hello-world.html",
        "title": "Hello, World!",
        "description": "By Kevin Feng – March 31, 2021",
    },
]

ENVIRONMENT = Environment(loader=FileSystemLoader(SOURCES))


def copy(path):
    file = path.relative_to(Path.cwd())
    output = OUTPUT / file

    shutil.copy(path, output)


def render(path, values=None):
    if values is None:
        values = {}

    file = str(path.relative_to(SOURCES))
    template = ENVIRONMENT.get_template(file)
    output = OUTPUT / file

    if not output.parent.exists():
        output.parent.mkdir(parents=True)

    output.write_text(template.render(**values))


if __name__ == "__main__":
    render(SOURCES / "index.html")
    render(SOURCES / "404.html")
    render(BLOG / "index.html", values={"ARTICLES": ARTICLES})

    copy(Path.cwd() / "favicon.ico")
    copy(Path.cwd() / "google6370c7d88b0b888c.html")
    copy(Path.cwd() / "index.css")

    for article in ARTICLES:
        render(
            BLOG / article["url"],
            values={"DESCRIPTION": article["description"]},
        )
