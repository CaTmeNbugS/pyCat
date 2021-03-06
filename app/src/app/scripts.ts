export function rippleEffect(btns){
    btns.forEach((btn) => {
        btn.addEventListener('click', function(event){
            const rect = btn.getBoundingClientRect();
            const x = event.clientX - rect.x;
            const y = event.clientY - rect.y;
            const ripple = document.createElement('div');
            ripple.style.left = x  + 'px';
            ripple.style.top = y  + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            setTimeout(() =>{
                 ripple.remove();
             }, 1500);
            }
        )
    })
};
export function getCookie(cookie) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + cookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export function getUrl(path, query){
    const url = {
        path: '/' + path,
        query: query,
    }
    sessionStorage.clear
    sessionStorage.setItem('url', JSON.stringify(url));
}
export function include(arr, obj){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == obj){
            return true;    
        }
    }
    return false
}

export class RegisterResponse{
    public success: boolean;
    public msg: string;
    public token: string
    public user: owner;
}
export class info{
    passport: boolean;
    vaccinated: boolean;
    attlb: boolean;
    sterilized: boolean;
}
export class owner{
    id: string;
    number: string;
    email: string;
    adress: string;
    name: string;
    surname: string;
}
export class DeclarationResponse{
    public _id: object;
    public type: string;
    public name: string;
    public age: object;
    public value: number;
    public imgs: Array<string>;
    public description: string;
    public info: info;
    public __v: number;
    public gender: string;
    public breed: string;
    public owner: owner;
    public onlymail: boolean;
}   