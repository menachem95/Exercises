const images = ['1.jpg', '2.jpg', '3.jpg'];
const widths = [200, 300, 200];

function getLeftValueForImage(img_arr, width_arr, img){
    const img_num = img_arr.indexOf(img)
    console.log(sumOfNumArray(width_arr.slice(0, img_num)))
}

function sumOfNumArray(arr){
    var num = 0
    for (let index = 0; index < arr.length; index++) {
        const x = Number(arr[index]);
        var num = num - x
    }
    return num
}