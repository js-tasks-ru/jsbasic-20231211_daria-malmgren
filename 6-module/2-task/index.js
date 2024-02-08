// Import the createElement helper to create DOM elements  
import createElement from '../../assets/lib/create-element.js';
// Define the ProductCard class
export default class ProductCard {
  // Take a product object as a parameter
  constructor(product) {
    // Store the product object for later use
    this.product = product;
    // Call the render method to create the card's HTML structure
    this.render();
    // Set up event listeners for the card's interactive elements
    this.addEventListeners();
  }
  // Generate the HTML for the product card
  render() {
    // Use template literals to insert product image, price, name
    let productCardHtml = `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
    // Convert the HTML string into a DOM element, assign it to this.elem
    this.elem = createElement(productCardHtml);
  }
  // Set up event listeners for the add button
  addEventListeners() {
    // Find the button within the card's DOM structure
    let addButton = this.elem.querySelector('.card__button');
    // Add a click event listener to the button
    addButton.addEventListener('click', this.onAddButtonClick.bind(this));
  }
  // The event handler for the add button's click event
  onAddButtonClick() {
    // Create a new custom event 
    let event = new CustomEvent('product-add', {
      detail: this.product.id,
      bubbles: true,
    });
    // Dispatch the custom event from the root element of the product card
    this.elem.dispatchEvent(event);
  }
}