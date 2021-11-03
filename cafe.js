new Vue({
    el:'#bebidas',
    data:{
        menu:[
            {bebida:"Latte Macchiato",ing:"Café frío con leche de tu elección",tam:"Alto",precio:"$69",vig:"Disponible"}, 
            {bebida:"Espresso",ing:"Clasico Café de la mejor calidad",tam:"Mediano",precio:"$49",vig:"No Disponible"}, 
            {bebida:"Helado Espresso Americano",ing:"Shots de ristretto, leche vaporizada y micro espuma de leche",tam:"Venti",precio:"$59",vig:"Disponible"}, 
            {bebida:"Cold Brew",ing:"Café infusionado por 20 horas. Intenso y refrescante.",tam:"Mediano",precio:"$89",vig:"Disponible"}, 
            {bebida:"Green Tea Frappucciono",ing:"Té verde helado con crema batida",tam:"Alto",precio:"$99",vig:"No Disponible"}, ],
        bNombre:'',bPrecio:'',mostrar: false,mostrar2: false},
    computed:{
        bBebidas(){return this.menu.filter((a)=> a.bebida.includes(this.bNombre));}, 
        bPrecios(){return this.menu.filter((a)=>a.precio.includes(this.bPrecio));}}    });
new Vue({
    el:'#pedido',
    data:{prod:[
        {cant:0,nombre:'Latte Macchiato',pUnitario:69,sTotal:0},
        {cant:0,nombre:'Helado Espresso Americano',pUnitario:59,sTotal:0},
        {cant:0,nombre:'Cold Brew',pUnitario:89,sTotal:0}],},
    methods:{subTotal(a){a.sTotal=a.cant*a.pUnitario;return a.sTotal;},},
    computed:{totalP(){this.total=0;
            for(objeto of this.prod){this.total+=objeto.sTotal;}return this.total}}   });