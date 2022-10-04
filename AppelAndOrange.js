function countApplesAndOranges(comienzoH, finalH, manzano, naranjo, apples, oranges) {

    let orange = 0;
    let apple = 0;

    apples.forEach((man) => {
         if((man + manzano) <= finalH && (man + manzano) >= comienzoH){
            apple ++
         }
    });
   oranges.forEach((nar) => {
        if((nar + naranjo) <= finalH && (nar + naranjo) >= comienzoH){
            orange ++
        }
    });
    console.log(apple);
    console.log(orange);
};

countApplesAndOranges(4,8,2,10,[-2,2,1],[5,-6]);
