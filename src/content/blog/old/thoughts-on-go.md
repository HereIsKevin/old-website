---
title: Thoughts on Go
description: Go's struggle with simplicity, usability, and maintainability.
pubDate: 2021-04-12
---

I love Go, and I hate Go. Go is a programming language with many likable aspects, like simplicity and performance, but out of its emphasis on those qualities, Go neglects ease of use and maintainability.

Go's painless concurrency is my favorite feature by far, as it allows easy development of high-performance servers. On the other hand, Go's error handling, though intuitive, is verbose and unwieldy. Out of trying to remain simple, Go lacks a error propagation operator like Rust, hindering maintainability.

I agree with Go's core value of simplicity, but I believe simplicity should not just benefit the internal implementation through simple grammars and bare features. Instead, simplicity should also be in the code written by the use. Much more code is written in Go than for the Go compiler, so the language should be optimized more for the end use than the implementors. Simplicity comes from **reducing the complexity of the code written while keeping readability**, not from anywhere else.

What do you think? Please comment on [GitHub Discussions](https://github.com/HereIsKevin/HereIsKevin/discussions/5).
