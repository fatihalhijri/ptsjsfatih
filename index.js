class jenisHewan {
    constructor(namaFN, jumlahkakiFN, tinggalFN, makananFN,){
    this.nama = namaFN;
    this.jumlahkaki = jumlahkakiFN;
    this.tinggal = tinggalFN;
    this.makanan = makananFN; 
     
    };
    jenis(){
        return "hewan " + this.nama + " ini berjenis kelamin jantan  ";
    }
    manfaat(kegunaan){
        return "biar "+ kegunaan + " keteika berjalan dengan mengunakna " + this.nama; 
    }
};
    

const kuda = new jenisHewan('Kuda', 4, 'afrika selatan', 'herbifora', 1000000);
console.log(kuda.nama);
console.log(kuda.jumlahkaki);
console.log(kuda.tinggal);
console.log(kuda.makanan);


console.log(kuda.jenis());
console.log(kuda.manfaat(" bisa ditunggangi dan tidak cape"));
