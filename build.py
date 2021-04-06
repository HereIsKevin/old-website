"""Build website and blog templates into webpages."""

from pathlib import Path

from jinja2 import Environment, FileSystemLoader

SOURCES = Path.cwd() / "src"
BLOG = SOURCES / "blog"
ARTICLES = [
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


def render(path, values=None):
    """Render template and write output"""

    if values is None:
        values = {}

    file = str(path.relative_to(SOURCES))
    template = ENVIRONMENT.get_template(file)
    output = Path.cwd() / file

    if not output.parent.exists():
        output.parent.mkdir(parents=True)

    output.write_text(template.render(**values))


if __name__ == "__main__":
    render(SOURCES / "index.html")
    render(BLOG / "index.html", values={"ARTICLES": ARTICLES})

    for article in ARTICLES:
        render(
            BLOG / article["url"],
            values={"DESCRIPTION": article["description"]},
        )
