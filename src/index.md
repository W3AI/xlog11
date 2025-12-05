---
layout: base.njk
title: Home
---

## Blog Posts

{% for post in collections.all %}

<article>
  <h2><a href="/xlog11/posts/{{ post.data.slug }}">{{ post.data.title }}</a></h2>

{% if post.data.image %}
<img src="/xlog11/{{ post.data.image }}" alt="{{ post.data.title }}" width="400"/>
{% endif %}

</article>
{% endfor %}
