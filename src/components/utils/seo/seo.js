import React, { Component } from "react";
import Helmet from "react-helmet";

export class SEO extends Component {
  defaultTitle = "Instaloja"
  defaultTitleAdd = "Instalações Comerciais em vidros temperados.";
  defaultDescription = "Há mais de 15 anos oferecendo projetos com qualidade e ampliando o seu negócio.";
  defaultFullTitle = this.defaultTitle + " | " + this.defaultTitleAdd;
  defaultKeywords = "instalacoes, comerciais, vidro, temperado, farmacias, lojas, projetos, comercio, negocio, salvador, lauro de freitas, camacari, feira de santana, bahia";
  defaultType = "website";
  render() {
    let data = this.props.data;
    let seo;
    if (data && data[0] && data[0].slice_type == "seo") {
      seo = data[0].primary;
    }
    let title = this.defaultFullTitle;
    let description = this.defaultDescription;
    let keywords = this.defaultKeywords;
    let type = this.defaultType;
    let url = "";
    let image = "https://mcm-website.cdn.prismic.io/mcm-website/1c2fff992cdab481b4b1b5e087f7e888af3b424a_mcm-bg-compressed3x.png";
    if (typeof window != "undefined" && window.location && window.location.href) {
      url = window.location.href;
    }
    if (seo && seo.seo_title && seo.seo_title.length > 0) {
      title = `${this.defaultTitle} | 'DINAMICO'`
    }
    if (seo && seo.seo_desciption && seo.seo_description.length > 0) {
      description = 'DINAMICO'
    }
    if (seo && seo.seo_keywords) {
      keywords = seo.seo_keywords;
    }
    if (seo && seo.seo_type) {
      type = seo.seo_type;
    }
    if (seo && seo.seo_image && seo.seo_image.url && seo.seo_image.url != "") {
      image = seo.seo_image.url;
    }

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
    );
  }
}