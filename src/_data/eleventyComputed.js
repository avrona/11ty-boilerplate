module.exports = {
        type: data => data.type || "page",
        meta: {
        site: {
            name: data => data.site.title,
            description: data => data.site.description,
            url: data => data.site.url,
            logo: {
            src: data => data.site.url + data.site.image,
            }
        },
        language: data => "fr-FR",

        url: data => data.site.url + data.permalink,
        title: data => data.name || data.site.description + " | " + data.site.name,
        name: data => data.name,
        description: data => data.description || data.site.description,
        color: data=> data.color,
        brand: data=> data.publisher,
        manufacturer: data=> data.publisher,
        material: data => data.material,
        gtin13: data => data.isbn,
        productID: data => "ISBN:" + data.isbn,
        sku: data => data.sku,
        image: {
            src: data => data.site.url + data.site.image || data.image
        },
        rating: {
            ratingValue: data => data.rating || 0,
            bestRating: 5,
            worstRating: 0,
            ratingCount: data => data.ratingCount || 0
         },
         offers: {
            url: data => data.site.url + data.permalink,
            priceCurrency: "USD",
            price: data => data.price != undefined ? data.price.replace(/[^\d.]/g,'') : "",
            availability: "https://schema.org/InStock",
            priceValidUntil: (new Date(new Date().getFullYear(),12,0)).toISOString(),
            availabilityStarts: (new Date(new Date().getFullYear(),1,0)).toISOString(),
            // availabilityEnds: (new Date(new Date().getFullYear(),12,0)).toISOString(),
            itemCondition: "https://schema.org/NewCondition"
         },
        keywords: data => data.keywords
        }
};