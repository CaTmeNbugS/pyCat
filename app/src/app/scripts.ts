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
export class RegisterResponse{
    public success: boolean;
    public msg: string;
    public token: string
    public user: object;
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
    public onlyMail: boolean;
}   