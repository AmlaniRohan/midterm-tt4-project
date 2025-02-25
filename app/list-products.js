const productContainer = document.getElementById("product-container");

            for (let i = 1; i <= 12; i++) {
                const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card" style="max-width: 320px">
                    <img src="assets/images/images (${i}).jpg" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">Product ${i}</h5>
                        <p class="card-text">Short description for product ${i}.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">$129.99</span>
                            <div>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-half text-warning"></i>
                                <i class="bi bi-star text-muted"></i>
                                <small class="text-muted">(4.${i % 10})</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm">Add to Cart</button>
                        <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>`;

                productContainer.innerHTML += productCard;
            }