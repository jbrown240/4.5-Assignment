function calculateFinancing() {
    // 1. Grab values from inputs
    let rawName = document.getElementById("custName").value;
    let creditTier = document.getElementById("creditScore").value;
    let rawPrice = document.getElementById("vehiclePrice").value;

    // Check if name or price is empty
    if (rawName === "" || rawPrice === "") {
        alert("Please enter both a name and a vehicle price.");
        return;
    }

    // 2. STRING METHOD (.trim and .toUpperCase)
    // Cleans up extra spaces and converts name to uppercase
    let formattedName = rawName.trim().toUpperCase();

    // 3. NUMBER METHOD (parseFloat)
    // Converts text input string into an actual number
    let priceNumber = parseFloat(rawPrice);

    let discountPercent = 0;
    let statusText = "";

    // 4. SWITCH STATEMENT
    // Determines discount rate and status based on credit score choice
    switch (creditTier) {
        case "excellent":
            discountPercent = 0.10; // 10% discount
            statusText = "Tier 1 Prime Approval";
            break;
        case "good":
            discountPercent = 0.05; // 5% discount
            statusText = "Tier 2 Standard Approval";
            break;
        case "fair":
            discountPercent = 0.02; // 2% discount
            statusText = "Tier 3 Conditional Approval";
            break;
        default:
            discountPercent = 0.00; // No discount
            statusText = "High Risk Approval";
            break;
    }

    // Calculate savings and total price
    let savings = priceNumber * discountPercent;
    let finalPrice = priceNumber - savings;

    // 5. IF CONDITIONAL STATEMENT
    // Check if customer gets a free perk based on final price
    let perkMessage = "";
    if (finalPrice >= 30000) {
        perkMessage = "Bonus Perk: Includes 2 Years of Complimentary Maintenance!";
    } else {
        perkMessage = "Bonus Perk: Standard 1-Year Warranty Included.";
    }

    // 6. NUMBER METHOD (.toFixed)
    // Formats numbers cleanly with 2 decimal places for money
    let formattedFinalPrice = finalPrice.toFixed(2);
    let formattedSavings = savings.toFixed(2);

    // 7. CONCATENATED STRING VARIABLE
    // Combining string literal text with variables using + operators
    let summaryText = "Customer: " + formattedName + " | Status: " + statusText;
    let priceText = "Original: $" + priceNumber.toFixed(2) + " | Discount Saved: $" + formattedSavings + " | Final Total: $" + formattedFinalPrice;

    // Output all results to the webpage HTML elements
    document.getElementById("summary-output").textContent = summaryText;
    document.getElementById("price-output").textContent = priceText;
    document.getElementById("perk-output").textContent = perkMessage;
    
    // Show the hidden result box
    document.getElementById("result-box").style.display = "block";
}