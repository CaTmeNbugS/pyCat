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
export class RegisterResponse{
    public success: boolean;
    public msg: string;
}
export class DeclarationResponse{
    public _id: object;
    public owner_id: string;
    public type: string;
    public name: string;
    public age: object;
    public value: number;
    public description: string;
    public info: object;
    public __v: number;
}   