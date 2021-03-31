from pathlib import Path

from jinja2 import Environment, FileSystemLoader

SOURCES = Path.cwd() / "src"
BLOG = SOURCES / "blog"
ARTICLES = [
    {
        "url": "hello-world.html",
        "title": "Hello, World!",
        "description": "By Kevin Feng – March 31, 2021",
    }
]

ENVIRONMENT = Environment(loader=FileSystemLoader(SOURCES))


def render(path, values=None):
    if values is None:
        values = {}

    file = str(path.relative_to(SOURCES))
    template = ENVIRONMENT.get_template(file)
    output = Path.cwd() / file

    output.write_text(template.render(**values))


if __name__ == "__main__":
    render(SOURCES / "index.html")

    if not BLOG.exists():
        BLOG.mkdir()

    render(BLOG / "index.html", values={"ARTICLES": ARTICLES})

    for article in ARTICLES:
        render(BLOG / article["url"], values={"DESCRIPTION": article["description"]})
