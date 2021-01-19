import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;


const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
    el.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    el && mount(el);
}

export { mount }