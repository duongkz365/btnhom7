


let ainput = document.getElementById("a");
let binput = document.getElementById("b");
let cinput = document.getElementById("c");

var btnSubmit = document.getElementsByClassName("submit");

function clickResult(){
    let a = ainput.value;
    let b = binput.value;
    let c = cinput.value;
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if(a == 0 || b==0 || c== 0){
       var e =  document.querySelectorAll(".message-error");
       for(let i = 0;i<e.length;i++)
         e[i].innerHTML = "Vui lòng nhập đúng dữ liệu";

         document.querySelector(".show-span-result").innerHTML = "Kết quả:  ";
         document.querySelector(".show-chuvi-result").innerHTML = "Chu vi là:";

         document.querySelector(".show-dientich-result").innerHTML = "Diện tích là:";
    }else{
        var e =  document.querySelectorAll(".message-error");
        for(let i = 0;i<e.length;i++)
          e[i].innerHTML = "";

          if( (a + b > c) && (a + c >b) && (b + c >a))

          // Kiểm tra điều các tam giác đặc biệt
          if ((a == b) && (b == c)) {
              document.querySelector(".show-span-result").innerHTML = "Kết quả:  Tam Giác Đều";
              document.querySelector(".show-chuvi-result").innerHTML = "Chu vi là:" + Chuvi(a,b,c);

              document.querySelector(".show-dientich-result").innerHTML = "Diện tích là:" + Dientich(a,b,c);

          } else if ((a == b) || (a == c) || (b == c)) {
              document.querySelector(".show-span-result").innerHTML = "Kết quả: Tam Giác Cân";
              document.querySelector(".show-chuvi-result").innerHTML = "Chu vi là:" + Chuvi(a,b,c);

              document.querySelector(".show-dientich-result").innerHTML = "Diện tích là:" + Dientich(a,b,c);

          } else if ((a * a == b * b + c * c) ||
                  (b * b == a * a + c * c) ||
                  (c * c == a * a + b * b)) {
                      document.querySelector(".show-span-result").innerHTML = "Kết quả: Tam Giác Vuông";
              document.querySelector(".show-chuvi-result").innerHTML = "Chu vi là:" + Chuvi(a,b,c);

              document.querySelector(".show-dientich-result").innerHTML = "Diện tích là:" + Dientich(a,b,c);

          } else if (((a * a + b * b == c * c) && (a == b)) ||
                  ((a * a + c * c == b * b) && (a == c)) ||
                  ((b * b + c * c == a * a) && (b == c))) {
                      document.querySelector(".show-span-result").innerHTML = "Kết quả: Tam Giác Vuông Cân";
              document.querySelector(".show-chuvi-result").innerHTML = "Chu vi là:" + Chuvi(a,b,c);                
              document.querySelector(".show-dientich-result").innerHTML = "Diện tích là:" + Dientich(a,b,c);


          } else {
              document.querySelector(".show-span-result").innerHTML = "Kết quả: Tam Giác Thường.";
              document.querySelector(".show-dientich-result").innerHTML = "Diện tích là:" + Dientich(a,b,c);
          }

          else {
              document.querySelector(".show-span-result").innerHTML = "Kết quả: Không phải tam giác";
          }
    }

    
    
}


function Chuvi(a,b,c){
    return a+b+c;
}
function Dientich(a,b,c){
    var p = Chuvi(a,b,c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}