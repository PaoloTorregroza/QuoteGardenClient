function card(category, content, author) {
    return `
        <div class="card-container">
            <h3 class="quote-category">${category.replace(/^\w/, (c) => c.toUpperCase())}</h3>
            <p class="quote-content">${content}</p>
            <p class="quote-author">${author}</p>
        </div>
    `;
}

export default card;