const express = require ("express");
const path = require ("path");

const products= [
    {
     "id": 1,
     "name": "Cafetera Moulinex Dolce Gusto Edited",
     "price": 6770,
     "discount": 50,
     "category": "visited",
     "description": "Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado con un diseño radical al que nos tenía acostumbrados Dolce Gusto.En este post te contamos todo lo que necesitas saber sobre ella, desde sus características técnicas hasta la calidad de las cápsulas o price.",
     "image": "img-cafetera-moulinex.jpg"
    },
    {
     "id": 2,
     "name": "Macbook Pro 2022",
     "price": 230000,
     "discount": 3,
     "category": "in-sale",
     "description": "Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD Pantalla 13.3\" Retina Apple Nueva Original. Importada de USA. Se entrega con la factura de compra para contar con la garantía del fabricante",
     "image": "img-macbook-pro-2019.jpg"
    },
    {
     "id": 3,
     "name": "Samsung Galaxy S10",
     "price": 72999,
     "discount": 25,
     "category": "in-sale",
     "description": "Experiencia visual excepcional. Mirá tus series y películas favoritas con la mejor definición.Tendrás colores brillantes y detalles precisos en todos tus contenidos.Disfrutá aún más del mejor entretenimiento gracias a su vasta pantalla y ángulos de visión amplios.",
     "image": "img-samsung-galaxy-s10.jpg"
    },
    {
     "id": 4,
     "name": "Smart TV Samsung 4K 50",
     "description": "Con el Smart TV Samsung UN50MU6100, viví una nueva experiencia visual con la resolución 4K, que te presentará imágenes con gran detalle y de alta calidad. Ahora todo lo que veas cobrará vida con brillo y colores más reales. Gracias a su tamaño de 50\", podrás transformar tu espacio en una sala de cine y transportarte a donde quieras.",
     "price": 34990,
     "discount": 0,
     "image": "img-tv-samsung-smart.jpg",
     "category": "visited"
    },
    {
     "id": 5,
     "name": "Heladera no frost Whirlpool WRM45A",
     "description": "Disfrutá de la frescura de tus alimentos y almacenalos de manera práctica y cómoda en tu heladera Whirlpool, la protagonista de tu cocina. Su sistema no frost evita la generación de escarcha y te permitirá conservar el sabor y las propiedades nutritivas de los productos.A su vez, su freezer cuenta con una capacidad de 86 litros, que facilitará la distribución y el orden de tus congelados para que no te preocupes por la falta de espacio.",
     "price": 47900,
     "discount": 10,
     "image": "img-heladera-whirpool.jpg",
     "category": "in-sale"
    },
    {
     "id": 6,
     "name": "Nikon Reflex D3500 - Kit",
     "description": "Incluye la cámara D3500, el objetivo zoom AF-P DX NIKKOR 18-55mm y el superteleobjetivo zoom compacto AF-P DX NIKKOR 70-300mm. Ambos objetivos enfocan de forma rápida y silenciosa, lo que resulta ideal para grabar metraje de vídeo sin que se escuche apenas el ruido del accionamiento.",
     "price": 53000,
     "discount": 20,
     "image": "img-camara-nikon.jpg",
     "category": "in-sale"
    },
    {
     "id": 7,
     "name": "Aire Acondicionado 3200w Frio / Calor",
     "description": "AIRE SPLIT 3200W TACA-3200WCHSA/KC FC TCL. Capacidad frio 3200 Watts. Capacidad calor 3300 Watts. Potencia Electrica(W)frio 996. Potencia Electrica(W)calor 1028. Eficiencia energética calor C. Eficiencia energética frio A. Frigorias 2750 UNIDAD INTERIOR. Peso Bruto 10kg. Peso Neto 7 kg",
     "price": 20999,
     "discount": 12,
     "image": "img-aire-acondicionado.jpg",
     "category": "in-sale"
    },
    {
     "id": 8,
     "name": "Notebook Lenovo I3 Intel 8gb Ram",
     "description": "PROCESADOR / CHIPSET. CPU: Intel Core i3(8a generación) 8130U / 2.2 GHz. Velocidad turbo máxima: 3, 4 GHz. Numero de núcleos: Doble núcleo. Cache: 4 MB. Arquitectura de 64 bit: ss. MEMORIA CACHÉ. Tamaño instalada: 4 MB. ALMACENAMIENTO. Interfaz Serial ATA - 600",
     "price": 36700,
     "discount": 5,
     "image": "img-laptop-lenovo.jpg",
     "category": "in-sale"
    }
   ]


const productsController = {

    index:(req,res)=>{
        res.render('home',
        {listadoDeProductos: products})},

    create:(req,res)=>{
        res.send("Formulario para crear un procuto")},

    store: (req, res) => {
		res.send("Producto " + req.params.id + " creado");
	},

    detail: (req, res) => {
        res.send ("Detalles del producto " + req.params.id)
	},

    edit: (req, res) => {
		res.send("Editar producto " + req.params.id);
	},

    update: (req, res) => {
		res.send("Producto " + req.params.id + " editado");
	},

	destroy : (req, res) => {
		res.send ("Producto " + req.params.id + " eliminado");
	},

    notFound:(req, res) => {
        res.render("Error página no encontrada", 404);
}
}

module.exports = productsController;