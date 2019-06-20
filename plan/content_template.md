# My Main Content

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Reflection

Wait, did I just use the old fashioned lorem ipsum filler text. That's boring. Instead, today, I'm going to create my own, perfect filler text, but first, maybe it's time to play around with preformatted text (aka. the HTML &lt;pre&gt; tag)

<pre>
    This is preformatted text.
    It  is  really  boring,  though  as  you  can  see,
    double  spacing  and  pressing  enter  to  create
    new  lines  works.
    The problem is preformatted text is unresponsive, and
    is in an extremely ugly "code" font.
This is an unindented line, unlike the other lines, just
    to prove that indentation also works in this horrid
    piece of HTML works.
</pre>

The preformatted text I just inserted is also an example of inserting HTML tags and stuff directly into markdown., which works wonderfully as expected.

Now, time to play with the headings, including all h1, h2, h3, h4, h5, and the tiny h6.

# I'm a H1
## I'm a H2
### I'm a H3
#### I'm a H4
##### I'm a H5
###### I'm a H6

<br/>

Now, it's time to stop being foolish, and not play around with the headings and do something useful...yet still demonstrates a feature of this website. Notice the space that is right there before this paragraph. That was made with a line break, the HTML &lt;br/&gt; element, to put a new line (in this case, it was because I needed extra spacing).

Thinking about it, maybe I should try to do more random stuff, and experiment with the unexpected…like random code inserted all over the place, either through HTML (like the preformatted text and line breaks) or MarkDown (like the rest of document). So now, I'm going to insert some code…in MarkDown, obviously, as when using MarkDown, stick to it. When exported to HTML though, the &lt;code&gt; tags are also going to be wrapped in &lt;pre&gt; tags, to preserve formatting, or the code is just going to be a very long line of unreadable nonsense.

```python
import foo_bar
from foo import bar
import barfoo as bf
from barf import *

class Bar():
    """
    Documentation is needed, so here's a comment...aka doc string
    """
    def __init__(self):
        # I'm so tired, here's a regular comment
        # This function is useless, but for the purpose of not producing errors,
        # here's a pass to the interpreter
        pass

    def foo(self):
        """Another useless doc string for documentation that does nothing"""
        bf.bar("I'm too lazy to do anything, other than barf")
        bar("All of these functions, actually do the same thing")
        print("Here's a builtin function, wait for it, the barf is almost here")
        barf_barf_barf("I just barfed three times, hence the function name")
```

Now I need to find some way to use this hideous piece of code, which here's the new code, in HTML.

```python
from whatever_stupid_code_file import Bar

# I'm so lazy, but still, here's the code to run that class
if __name__ == "__main__":
    a_bar = Bar()
    a_bar.foo() # Which actually causes a barf
```

I'm getting tired now, so maybe I'll continue writing this nonsense tomorrow...

## Back from Yesterday

Hi, I'm back from yesterday, so far, nothing much has happened, but now, I want to play around with other stuff in MarkDown. We covered headings and code yesterday, but there is much more to do before we are finished with the basics. An important thing that I forgot yesterday was making text **bold** and in *italics*. Bold text can be created by \*\*surrounding some text with double asterisks\*\* or \_\_surrounding the text with double underscores\_\_. Italics can be created in a similar manner, with text \*surrounded with a single asterisk\* or text \_surrounded with a single underscore\_.

Many might ask, how do you type a underscore or asterisk, but it is simple, and done like most programming languages. You simply add a \\ backslash in front. So \* is actually \\\* and \_ is actually \\\_. Of course, to type a backslash, you simply add a \\ backslash in front of a \\ backslash. So \\ is actually \\\\.

Remember the way I use a HTML &lt;br/&gt; for a line break. Well, it can actually be created by putting &nbsp;&nbsp; two spaces at the end of the line like this.
The line just broke, as you can see. Now, a line break can also be created by adding a \\ backslash at the end of the line like this.\
The line just broke again, as you can see, both ways work perfectly.

> Now, I do not want to be quoting anyone, but as you, the reader, can see, here is a blockquote, which is inserted with a &gt; at the be beginning of the line.
> > Here's another blockquote, nestled in the first with another &gt;.

An unordered list, one with bullet points, can be created simply with \* asterisks at the beginning of each line or a - like this. You can nestle them with indentation.

- List of Hyphens
- Item 1
    - Nestled item 1
        - Nestled nestled item 1
    - Nestled item 2
- Item 2

* List of Asterisks
* Item
    * Nestled item
        * Nestled nestled item
            * Nestled nestled nestled item

An ordered list, one with numbers, can be created with lines enumerated with 1. or lines enumerated with 1), though note that you have to manually increment the number

1. Numbered item (I'm using the 1. format)
2. Numbered item (I'm not going to say the item number)

1) Another item in a new list (I've switched to the 1) format)
2) Just to say, the lists can be nestled, and mixed with unordered lists

---

Did you just see that, it was a horizontal rule. A horizontal rule can be made with three hyphens ---, or with three asterisks \*\*\*. The one I just made was with three hyphens ---, now here's one made with three asterisks \*\*\*

***

Finally, we're nearly finished with the basics. For now, here are some [links](#), all named [link](#), which having so many useless [links](#) is definately quite annoying, as they lead to nowhere. To create a link, you use the format \[link name in brackets\]\(followed by link url in parenthesis\).

Last but not least in the MarkDown basics, are inserting images, which is so similar to the links. To keep you from falling asleap, here's a random image to wake you up while reading this really long article on MarkDown and nonsense.

![A diagram of how compilation and execution for the .NET Framework works](/static/clr-process.png)

Pretty boring image, huh. Well, now it's time to teach you how to insert something like that. First of all, the format is similar to that of a link, but with an extra exclamation point in the front. You use the format !\[alternative text for screen readers goes here (aka. description or the image) in brackets\]\(followed by the url of the image in parenthesis\).

Finally, you've made it through my random babbling and MarkDown tutorial. You now know all the basics. Meanwhile, to find out more, check out some of my newer tutorials. If you have questions, Google it, or refer to the [CommonMark spec](https://spec.commonmark.org) (here's a link again). If you are a developer using GitHub and need a MarkDown reference, use the [Github Flavored MarkDown (GFM) spec](https://github.github.com/gfm/). Everything mentioned in this article is part of the CommonMark spec, but is also supported in GFM (...which has more features, including tables).

If you need a good MarkDown editor, use [Visual Studio Code](https://code.visualstudio.com) or [Atom](https://atom.io). If you don't mind using a stable though slightly buggy beta product that is nevertheless polished and has a lovely inline preview, try [Typora](https://typora.io), which is free in beta, but eventually is going to be paid. A free, but extremely buggy and unpolished free and open source alternative/clone to Typora is [Mark Text](https://marktext.app). Just for the sake of it, Visual Studio Code and Atom are also open source (both under MIT license). Now get on with it and start writing something...in MarkDown.
