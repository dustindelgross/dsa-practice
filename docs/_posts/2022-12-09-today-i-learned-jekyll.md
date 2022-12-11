---
layout: post
title:  "Today I Learned: Jekyll"
date:   2022-12-09 18:38:51 -0500
categories: jekyll update
---

## I Made This Site Using GitHub Pages and Jekyll
---

I followed the [GitHub documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) on how to make a GitHub pages site using Jekyll, which is a Markdown processor (see below for what that means). I've always seen these documentation sites that somehow manage to capture all of their code, explanations, and stuff and I never understood how they did it, but now I kind of get it. This is going to just be a very basic, static site that lets you write simple markdown and have it be displayed in a neat and structured way.

#### Useful Links

- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Documentation for Making a Site Like This](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [Same-Page Link Test][link-test]

### What's "Markdown"?

It's basically just a way of formatting text; headings, paragraphs, links, lists, images, stuff like that. Same kind of stuff you do with a Word document, but done with code.

#### Why would I use markdown?

For making simple blog post sites, easily updatable documentation or tutorials, keeping structured notes, or just because you want to. Markdown is a really great way to write a structured set of notes, really quickly; as someone who tends to have a million and one notes-to-self scattered everywhere, I wanted a place to house some of the more helpful ones for people who might want to know some of the same things. I do the Googling, and hopefully, other people can Google things faster because of it.

# [link-test]: Link Test!

#### Out-of-the-box Jekyll Documentation

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
