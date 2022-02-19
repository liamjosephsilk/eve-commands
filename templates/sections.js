export function sections(name) {
  const section = `
<div>
  This is a new section file for ${name}
</div>

{% schema %}
  {

  }
{% endschema %}
  `;
  return section.trim();
}

export function sectionsJS(name) {
  const section = `
<script src="{{ '${name}.js' | asset_url }}" defer="defer" type="module"></script>

<${name}> 
  <div>
    This is a new section file for ${name}
  </div>
</${name}>

{% schema %}
  {
    
  }
{% endschema %}
  `;
  return section.trim();
}
