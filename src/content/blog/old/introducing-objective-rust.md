---
title: Introducing Objective-Rust
description: Combining the elegance of Objective-C with the power of Rust.
pubDate: 2021-04-01
---

Rust is an amazing programming language, with guaranteed memory safety, powerful polymorphism based on traits, and performance to rival that of C. Despite having many powerful features, Rust is still missing the dynamism and beauty of Objective-C.

Now welcome Objective-Rust, a library meant to integrate and exactly replicate Objective-C in Rust. For bits of specific syntax that Rust macros cannot handle, a preprocessor is used. Here's a taste of what it is going to be like:

<script src="https://gist.github.com/HereIsKevin/71f77af711ed2895434a47bcc1c34d28.js"></script>

Objective-Rust is like a mix of Rust and Objective-C with a touch of Swift. The syntax clearly comes from Rust with an heavy inspiration from Objective-C. The beautiful object-oriented style and message passing of Objective-C is still preserved, but now properties and fields are both the same, just like Swift. Instead of using the ugly method calls from Swift and Rust, Objective-Rust uses Objective-C style messaging, with the brevity and clearness of Swift and Rust still preserved.

Like Swift, pointers are no more in Objective-Rust. The preprocessor handles all pointers and type conversions automatically, though it seems pointless to use Rust's string type when the lovely NSString can be used instead.

What do you think? Please comment on [GitHub Discussions](https://github.com/HereIsKevin/HereIsKevin/discussions/3).
