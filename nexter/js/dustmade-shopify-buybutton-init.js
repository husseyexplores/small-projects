// Using customized sdk to support squared images, line item properties and high-res images.
  var scriptURL = "https://cdn.shopify.com/s/files/1/2388/0287/t/11/assets/custom-shopify-buy-button-sdk.min.js?1983";

/* JEWELRY-CUSTOM -- FORMATTED */
var client = ShopifyBuy.buildClient({
    domain: 'dustmade.myshopify.com',
    storefrontAccessToken: '6207be78a6605d2e08d5b09045772a71',
  });

  var ui = ShopifyBuy.UI.init(client);

  ui.createComponent("collection", {
  id: 56317640806,
  node: document.getElementById("collection-component-434d86d49ee"),
  moneyFormat: "%24%7B%7Bamount%7D%7D",
  options: {
    product: {
      buttonDestination: "modal",
      variantId: "all",
      isButton: true,
      contents: {
        imgWithCarousel: false,
        variantTitle: false,
        options: false,
        description: false,
        buttonWithQuantity: false,
        button: false,
        quantity: false
      },
      templates: {
        img:
          "{{#data.currentImage.src}}" +
          '<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper">' +
          '<img src="{{data.currentImage.srcSquare}}" class="{{data.classes.product.img}}" data-element="product.img" />' +
          "</div>" +
          "{{/data.currentImage.src}}"
      },
      text: {
        button: "VIEW PRODUCT"
      },
      styles: {
        product: {
          "@media (min-width: 2000px)": {
            "margin-left": "30px",
            "margin-bottom": "50px"
          }
        },
        img: {
          width: "100%"
        },
        button: {
          "background-color": "#efc2a6",
          "font-family": "Raleway, sans-serif",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#d7af95"
          },
          "border-radius": "1px",
          "font-weight": "normal",
          ":focus": {
            "background-color": "#d7af95"
          }
        },
        variantTitle: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal"
        },
        title: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal",
          "font-size": "16px",
          color: "#612e38"
        },
        description: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal"
        },
        price: {
          "font-family": "Raleway, sans-serif",
          color: "#b1b1b1",
          "font-weight": "normal"
        },
        quantityInput: {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        compareAt: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal",
          color: "#b1b1b1"
        }
      },
      googleFonts: ["Raleway"]
    },

    modalProduct: {
      templates: {
        imgWithCarousel:
          "{{#data.currentImage.srcOriginal}}" +
          '<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">' +
          '<div class="main-image-wrapper">' +
          '<button type="button" class="carousel-button carousel-button--previous">' +
          "Left" +
          '<img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>' +
          "</button>" +
          '<img src="{{data.currentImage.srcSquareLarge}}" class="{{data.classes.product.img}}" alt="{{data.currentImage.altText}}" data-element="product.img" />' +
          '<button type="button" class="carousel-button carousel-button--next">' +
          "Right" +
          '<img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>' +
          "</button>" +
          "</div>" +
          '<div class="{{data.classes.product.carousel}}">' +
          "{{#data.carouselImages}}" +
          '<a data-element="product.carouselitem" aria-label="{{altText}}" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>' +
          "{{/data.carouselImages}}" +
          "</div>" +
          "</div>" +
          "{{/data.currentImage.srcOriginal}}",

        lineItemProps:
          '<div class="{{data.classes.product.lineItemPropWrapper}}">' +
          '<label for="line_item_prop1" class="{{data.classes.product.lineItemPropLabel}} {{data.classes.product.propLabel}}">' +
          "Please specify your customization(s) and any order notes here!" +
          "</label>" +
          '<textarea id="line_item_prop1" data-lineItemProp="Customization Note" rows="4" class="{{data.classes.product.lineItemProp}} {{data.classes.product.propTextarea}}" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off" type="text" aria-label="Note" value="{{data.lineItemProp}}" data-element="product.noteInput"></textarea>' +
          "</div>"
      },
      contents: {
        img: false,
        imgWithCarousel: true,
        variantTitle: false,
        buttonWithQuantity: true,
        button: false,
        quantity: false,
        lineItemProps: true
      },
      classes: {
        propLabel: "custom__props__label",
        propTextarea: "custom__props__input"
      },
      order: [
        "img",
        "imgWithCarousel",
        "title",
        "variantTitle",
        "price",
        "options",
        "lineItemProps",
        "buttonWithQuantity",
        "button",
        "description"
      ],
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        img: {
          width: "100%"
        },
        propLabel: {
          "font-family": "Raleway, sans-serif"
        },
        propTextarea: {
          resize: "none",
          width: "100%",
          "min-height": "82px",
          "border-radius": "3px",
          "font-family": "Raleway, sans-serif",
          "font-size": "16px",
          transition: "border 0.2s",
          outline: "none",
          ":focus": {
            border: "1px solid #d7af95"
          },
          ":active": {
            border: "1px solid #d7af95"
          }
        },
        button: {
          "background-color": "#efc2a6",
          "font-family": "Raleway, sans-serif",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#d7af95"
          },
          "border-radius": "1px",
          "font-weight": "normal",
          ":focus": {
            "background-color": "#d7af95"
          }
        },
        variantTitle: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal"
        },
        title: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal",
          color: "#864351"
        },
        description: {
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal"
        },
        price: {
          "font-family": "Raleway, sans-serif",
          "font-size": "14px",
          color: "#b1b1b1",
          "font-weight": "normal"
        },
        quantityInput: {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        },
        compareAt: {
          "font-size": "11.9px",
          "font-family": "Raleway, sans-serif",
          "font-weight": "normal"
        }
      },
      googleFonts: ["Raleway"]
    },

    cart: {
      contents: {
        button: true,
        note: true
      },
      text: {
        title: "Your Cart",
        noteDescription: "Order notes/special instructions for seller"
      },
      styles: {
        button: {
          "background-color": "#efc2a6",
          "font-family": "Raleway, sans-serif",
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#d7af95"
          },
          "border-radius": "1px",
          "font-weight": "normal",
          ":focus": {
            "background-color": "#d7af95"
          }
        },
        footer: {
          "background-color": "#ffffff"
        }
      },
      googleFonts: ["Raleway"]
    },

    lineItem: {
      contents: {
        notes: true
      },
      templates: {
        notes:
          '{{#data.customAttributes}}<div class="{{data.classes.lineItem.notes}}"><small><strong>{{key}}:</strong> {{value}}</small></div>{{/data.customAttributes}}'
      },
      classes: {
        notes: "lineItem-notes"
      },
      styles: {
        notes: {
          clear: "both",
          "margin-top": "10px"
        },
        quantity: {
          "margin-top": "20px",
          clear: "both"
        },
        variantTitle: {
          float: "left",
          clear: "both",
          "margin-left": "80px;"
        }
      },
      order: ["image", "title", "variantTitle", "price", "quantity", "notes"]
    },

    toggle: {
      styles: {
        toggle: {
          "font-family": "Raleway, sans-serif",
          "background-color": "#efc2a6",
          ":hover": {
            "background-color": "#d7af95"
          },
          "font-weight": "normal",
          ":focus": {
            "background-color": "#d7af95"
          }
        },
        count: {
          "font-size": "13px"
        }
      },
      googleFonts: ["Raleway"]
    },

    option: {
      styles: {
        label: {
          "font-family": "Raleway, sans-serif"
        },
        select: {
          "font-family": "Raleway, sans-serif"
        }
      },
      googleFonts: ["Raleway"]
    },

    productSet: {
      styles: {
        products: {
          "@media (min-width: 3000px)": {
            "margin-left": "-30px"
          }
        }
      }
    }
  }
});


/* JEWELRY-CUSTOM -- OLD */
(function() {
  // var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  var scriptURL = "https://cdn.shopify.com/s/files/1/2388/0287/t/11/assets/custom-shopify-buy-button-sdk.min.js?1967";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "dustmade.myshopify.com",
      storefrontAccessToken: "6207be78a6605d2e08d5b09045772a71"
    });

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      var iframe = $("iframe").contents();

      ui.createComponent("collection", {
        id: 56317640806,
        node: document.getElementById("collection-component-434d86d49ee"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "modal",
            variantId: "all",
            isButton: true,
            contents: {
              imgWithCarousel: false,
              variantTitle: false,
              options: false,
              description: false,
              buttonWithQuantity: false,
              button: false,
              quantity: false
            },
            text: {
              button: "VIEW PRODUCT"
            },
            styles: {
              product: {
                "@media (min-width: 2000px)": {
                  "min-width": "calc(300% - 3000px)",
                  "margin-left": "30px",
                  "margin-bottom": "50px"
                }
              },
              img: {
                width: "auto",
                "max-width": "unset !important",
                "margin-left": "50%",
                transform: "translateX(-50%)",
                "min-width": "100%",
                "object-fit": "cover",
                "@media (min-width: 2000px)": {
                  height: "400px"
                },
                "@media (max-width: 1999px)": {
                  height: "350px"
                },
                "@media (max-width: 1440px)": {
                  height: "300px"
                },
                "@media (max-width: 1024px)": {
                  height: "250px"
                }
              },
              button: {
                "background-color": "#efc2a6",
                "font-family": "Raleway, sans-serif",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#d7af95"
                },
                "border-radius": "1px",
                "font-weight": "normal",
                ":focus": {
                  "background-color": "#d7af95"
                }
              },
              variantTitle: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal"
              },
              title: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal",
                "font-size": "16px",
                color: "#612e38"
              },
              description: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal"
              },
              price: {
                "font-family": "Raleway, sans-serif",
                color: "#b1b1b1",
                "font-weight": "normal"
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px"
              },
              compareAt: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal",
                color: "#b1b1b1"
              }
            },
            googleFonts: [
              "Raleway",
              "Raleway",
              "Raleway",
              "Raleway",
              "Raleway",
              "Raleway"
            ]
          },

          cart: {
            contents: {
              button: true,
              note: true
            },
            text: {
              title: "Your Cart"
            },

            styles: {
              button: {
                "background-color": "#efc2a6",
                "font-family": "Raleway, sans-serif",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#d7af95"
                },
                "border-radius": "1px",
                "font-weight": "normal",
                ":focus": {
                  "background-color": "#d7af95"
                }
              },
              footer: {
                "background-color": "#ffffff"
              }
            },
            googleFonts: ["Raleway"]
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false,
              description: true,
              options: true,
              lineItem: true
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                },
                img: {
                  width: "100%"
                },
                imgWithCarousel: {
                  display: "none"
                }
              },
              button: {
                "background-color": "#efc2a6",
                "font-family": "Raleway, sans-serif",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#d7af95"
                },
                "border-radius": "1px",
                "font-weight": "normal",
                ":focus": {
                  "background-color": "#d7af95"
                }
              },
              variantTitle: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal"
              },
              title: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal",
                color: "#864351"
              },
              description: {
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal"
              },
              price: {
                "font-family": "Raleway, sans-serif",
                "font-size": "14px",
                color: "#b1b1b1",
                "font-weight": "normal"
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px"
              },
              compareAt: {
                "font-size": "11.9px",
                "font-family": "Raleway, sans-serif",
                "font-weight": "normal"
              }
            },
            googleFonts: [
              "Raleway",
              "Raleway",
              "Raleway",
              "Raleway",
              "Raleway",
              "Raleway"
            ]
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Raleway, sans-serif",
                "background-color": "#efc2a6",
                ":hover": {
                  "background-color": "#d7af95"
                },
                "font-weight": "normal",
                ":focus": {
                  "background-color": "#d7af95"
                }
              },
              count: {
                "font-size": "13px"
              }
            },
            googleFonts: ["Raleway"]
          },
          option: {
            styles: {
              label: {
                "font-family": "Raleway, sans-serif"
              },
              select: {
                "font-family": "Raleway, sans-serif"
              }
            },
            googleFonts: ["Raleway", "Raleway"]
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 3000px)": {
                  "margin-left": "-30px"
                }
              }
            }
          }
        }
      });
      // createComponent End

    });
  }
})();
