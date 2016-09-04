{% unless page.lang %}
<script>
    var lang = (localStorage && localStorage.preferredLanguage) || ((window.navigator.languages && window.navigator.languages[0]) || window.navigator.userLanguage || window.navigator.language || window.navigator.systemLanguage).substr(0, 2).toLowerCase();
    available = "{{ site.available }}";
    if (available.indexOf(lang) >= 0) {
        location.pathname = lang + location.pathname;
    }
</script>
{% endunless %}
