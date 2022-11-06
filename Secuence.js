const data  = [5,2,1,3,4];

const seq = (p)=>{

    let ordenado = [...p].sort((a,b)=>a-b);
    let resp = [];
    for (const no of ordenado) {
        let in1 = p.indexOf(no) +1;
        let in2 = p.indexOf(in1) +1;
        resp.push(in2);
    };

    console.log(resp);
    return resp
  
};

seq(data);