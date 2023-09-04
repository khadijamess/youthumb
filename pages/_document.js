import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

        </Head>
        <body>
          <p>YouTube est un site web d'hébergement de vidéos et média social sur lequel les utilisateurs peuvent envoyer, rega
            rder, commenter, évaluer et partager des vidéos en streaming. Il est créé en février 2005 par Steve Chen, Chad Hurley et Jawed
             Karim, trois</p>
             <p>YouTube est organisé en catégories thématiques avec un moteur de recherche qui permet de trouver 
              un contenu via des mots-clés. Si l'essentiel des vidéos sont mises en lignes par des particuliers appelés « youtubeurs », l
              e site a progressivement évolué en plateforme de divertissement généraliste et accueille de nombreuses chaînes officielles 
              de médias traditionnels. Les chaînes YouTube les plus populaires et les partenaires officiels du site perçoivent un pourcen
              tage des revenus publicitaires qu'ils contribuent à générer.</p>

          <Main />
          <NextScript />

          
              
        </body>

      </Html>
    );
  }
}

export default MyDocument;
