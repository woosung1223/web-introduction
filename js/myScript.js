let myArray = []

document.getElementById('frm').onsubmit = function(){
    //파트1. 여기서 this는 'my_form'을 의미합니다.
    var name = document.getElementById('myName').value;
    var first = document.querySelector("input[name=first]").checked;
    var second = document.querySelector("input[name=second]").checked;
    var third = document.querySelector("input[name=third]").checked;
    var fourth = document.querySelector("input[name=fourth]").checked;
    var fifth = document.querySelector("input[name=fifth]").checked;

    myArray.push({name, first, second, third, fourth, fifth});


    //파트2. 새로운 <p> 태그를 하나 생성하여 body에 추가합니다.
    var p = document.createElement('p')
    p.textContent = "이름 : " + name + " " +
    "나는 내일, 어제의 너와 만난다 " + convert(first) + "\n" +
    "타이타닉 " + convert(second) + "\n" +
    "다크나이트 " + convert(third) + "\n" + 
    "어바웃타임 " + convert(fourth) + "\n" +
    "비긴어게인 " + convert(fifth) + "\n";

    document.getElementsByTagName('body')[0].appendChild(p)
    alert(count(first, second, third, fourth, fifth) + "개의 취향이 같으시네요!");
    console.log(myArray);
    return false;
  }

  function convert(isChecked) {
    if (isChecked) {
        return "✔️";
    }
    return "❌";
  }

  function count(first, second, third, fourth, fifth) {
    let count = 0;
    if (first) {
        count += 1;
    } 

    if (second) {
        count += 1;
    } 

    if (third) {
        count += 1;
    } 

    if (fourth) {
        count += 1;
    } 

    if (fifth) {
        count += 1;
    } 

    return count;
  }

