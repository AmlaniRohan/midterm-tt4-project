import './add-products.scss';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    if(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            alert('success');
        });
    }
});