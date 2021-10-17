
//Declaration type
//type1t_to_declare_Object
function fruit(taste,color){
    this.taste=taste,
    this.color=color;
};
 
var apple=new fruit("sweet","red");
//expression type
//type2_to_declare_Object
var mango={
    taste:"sweet",
    color:"yellow"
}
function book(pages,writer){
    this.pages=pages;
    this.writer=writer;
}
var mybook=new book(460,"Trivendram_Pal");

//decl
//type3todeclareobject
class bookself{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
};

let meraself=new bookself("45","46");

//Declaration type
//type4todeclareobject
var newclass =class{
    constructor(height,width)
    {
        this.height=height;
        this.width=width;
    }
};

let mynewself= new newclass("47","49");