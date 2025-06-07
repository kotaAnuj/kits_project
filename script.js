document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            quote: "Solar power is abundant but not very accessible. But now with SundayGrids, I pay for a part of my power bill without having to install panels by myself. No hassles, no fossils.",
            customer: "Sandeep, customer since 2020",
            quoteIcon: "https://www.sundaygrids.com/images/solar-rooftops.svg",
            logoIcon: "https://www.sundaygrids.com/images/the-better-india.svg"
        },
        {
            quote: "SundayGrids made going solar incredibly easy. The process was seamless, and I'm already seeing significant savings on my electricity bills. Highly recommend!",
            customer: "Priya, customer since 2021",
            quoteIcon: "https://www.sundaygrids.com/images/solar-rooftops.svg",
            logoIcon: "https://www.sundaygrids.com/images/the-better-india.svg"
        },
        {
            quote: "I never thought I could afford solar, but SundayGrids offered a flexible plan that fit my budget. It's a great investment for both my wallet and the planet.",
            customer: "Rahul, customer since 2019",
            quoteIcon: "https://www.sundaygrids.com/images/solar-rooftops.svg",
            logoIcon: "https://www.sundaygrids.com/images/the-better-india.svg"
        }
    ];

    let currentTestimonial = 0;
    const testimonialContent = document.querySelector('.testimonial-content');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    function updateTestimonial() {
        const { quote, customer, quoteIcon, logoIcon } = testimonials[currentTestimonial];
        testimonialContent.querySelector('.quote-text').textContent = quote;
        testimonialContent.querySelector('.customer-info').textContent = customer;
        testimonialContent.querySelector('.quote-icon').src = quoteIcon;
        testimonialContent.querySelector('.logo-icon').src = logoIcon;
        updateDots();
    }

    function updateDots() {
        dotsContainer.innerHTML = '';
        testimonials.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === currentTestimonial) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                updateTestimonial();
            });
            dotsContainer.appendChild(dot);
        });
    }

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    });

    updateTestimonial();
});

// FAQ Section functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        faqItem.classList.toggle('active');
    });
});

// Bill input functionality
document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('billInput');
    const savingsRange = document.getElementById('savingsRange');
    const rangeValue = document.getElementById('rangeValue');

    // Initialize range value display
    rangeValue.textContent = `${savingsRange.value}%`;

    billInput.addEventListener('input', () => {
        // Ensure only numeric input
        billInput.value = billInput.value.replace(/[^0-9]/g, '');
    });

    savingsRange.addEventListener('input', () => {
        rangeValue.textContent = `${savingsRange.value}%`;
    });
});

// Utility Provider Selection functionality
document.addEventListener('DOMContentLoaded', () => {
    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
        'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
        'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
        'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
        'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
    ];    const utilities = {
        'Maharashtra': ['MSEDCL', 'BEST', 'Tata Power', 'Adani Electricity'],
        'Delhi': ['BSES Rajdhani', 'BSES Yamuna', 'Tata Power Delhi'],
        'Karnataka': ['BESCOM', 'MESCOM', 'HESCOM', 'GESCOM', 'CESCOM'],
        'Telangana': ['Southern Power Distribution Company of Telangana Limited', 'Northern Power Distribution Company of Telangana Limited'],
        // Add more state-wise utilities as needed
    };

    const stateSelect = document.querySelector('select:first-of-type');
    const utilitySelect = document.querySelector('select:last-of-type');

    if (stateSelect && utilitySelect) {
        // Populate states
        states.sort().forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });

        // Handle state selection
        stateSelect.addEventListener('change', function() {
            const selectedState = this.value;
            utilitySelect.innerHTML = '<option value="" selected disabled>Select your power provider</option>';
            
            if (utilities[selectedState]) {
                utilities[selectedState].forEach(utility => {
                    const option = document.createElement('option');
                    option.value = utility;
                    option.textContent = utility;
                    utilitySelect.appendChild(option);
                });
            }
        });
    }

    // Back button functionality
    const backButton = document.querySelector('.btn-link');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
});

// Power Generation Chart
document.addEventListener('DOMContentLoaded', function() {    const powerChart = document.getElementById('powerChart');
    if (powerChart) {
        new Chart(powerChart, {
            type: 'line',
            data: {
                labels: ['06:22', '07:54', '09:22', '10:55', '12:22'],
                datasets: [{
                    label: 'Power Generation (kW)',
                    data: [5, 20, 42, 68, 15],
                    borderColor: '#198754',
                    backgroundColor: 'rgba(25, 135, 84, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#198754',
                    pointBorderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 80,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }
});

// Solar Capacity Calculator
document.addEventListener('DOMContentLoaded', function() {
    const powerBillInput = document.getElementById('power-bill');
    const savingsRange = document.getElementById('savings-range');
    const savingsValue = document.querySelector('.savings-value');
    
    // Calculator elements
    const monthlyValue = document.querySelector('.calculations-panel .calc-item:first-child .calc-value');
    const reservedSolar = document.querySelector('.calc-grid .calc-item:nth-child(1) .calc-value');
    const energyProduced = document.querySelector('.calc-grid .calc-item:nth-child(2) .calc-value');
    const annualSavings = document.querySelector('.calc-grid .calc-item:nth-child(3) .calc-value');
    const tenYearSavings = document.querySelector('.calc-grid .calc-item:nth-child(4) .calc-value');
    const finalPayable = document.querySelector('.final-value');

    function updateCalculations() {
        const billAmount = parseFloat(powerBillInput.value) || 0;
        const savingsPercent = parseFloat(savingsRange.value) || 0;
        const discountRate = 6.42; // ₹6.42 per unit

        // Calculate monthly savings
        const monthlySavings = (billAmount * savingsPercent / 100);
        monthlyValue.textContent = `₹${monthlySavings.toFixed(2)}`;

        // Calculate reserved solar capacity (W)
        const solarCapacity = Math.round((monthlySavings / discountRate) * 100);
        reservedSolar.textContent = `${solarCapacity} W`;

        // Calculate monthly energy production (kWh)
        const monthlyEnergy = (solarCapacity * 0.12); // Assuming 12% efficiency
        energyProduced.textContent = `${monthlyEnergy.toFixed(2)} kWh`;

        // Calculate annual savings
        const annualAmount = monthlySavings * 12;
        annualSavings.textContent = `₹${annualAmount.toFixed(2)}`;

        // Calculate 10-year savings
        const tenYearAmount = annualAmount * 10;
        tenYearSavings.textContent = `₹${tenYearAmount.toFixed(2)}`;

        // Calculate final payable (with 18% GST)
        const baseAmount = solarCapacity * 100; // Example rate
        const gstAmount = baseAmount * 0.18;
        const totalAmount = baseAmount + gstAmount;
        finalPayable.textContent = `₹${totalAmount.toFixed(2)}`;
    }

    if (powerBillInput && savingsRange) {
        powerBillInput.addEventListener('input', function() {
            updateCalculations();
        });

        savingsRange.addEventListener('input', function() {
            savingsValue.textContent = `${this.value}%`;
            updateCalculations();
        });

        // Initial calculation
        updateCalculations();
    }
});

// Calculator functionality for select-capacity page
function initializeCapacityCalculator() {
    const powerBillInput = document.getElementById('powerBill');
    const savingsRange = document.getElementById('savingsRange');
    const rangeValueElement = document.querySelector('.range-value');
    const monthlyElement = document.getElementById('monthlySavings');
    const solarCapacityElement = document.getElementById('solarCapacity');
    const energyElement = document.getElementById('energyProduced');
    const annualElement = document.getElementById('annualSavings');
    const tenYearElement = document.getElementById('tenYearSavings');
    const finalPriceElement = document.getElementById('finalPrice');

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }).format(amount);
    }

    function updateCalculations() {
        const powerBill = parseFloat(powerBillInput.value) || 0;
        const savingsPercentage = parseInt(savingsRange.value) || 0;
        
        // Update range value display
        rangeValueElement.textContent = `${savingsPercentage}%`;
        
        // Calculate monthly savings based on power bill and savings percentage
        const monthlySavings = (powerBill * savingsPercentage / 100);
        
        // Calculate required solar capacity (₹6.42 per unit)
        const requiredUnits = monthlySavings / 6.42;
        const solarCapacity = Math.ceil(requiredUnits * 100); // 100W per unit
        
        // Calculate monthly energy production (120 kWh per kW)
        const monthlyEnergy = (solarCapacity / 1000) * 120;
        
        // Calculate annual and 10-year savings
        const annualSavings = monthlySavings * 12;
        const tenYearSavings = annualSavings * 10;
        
        // Calculate final price (₹65 per watt + 18% GST)
        const basePrice = solarCapacity * 65;
        const finalPrice = basePrice * 1.18;

        // Update UI
        monthlyElement.textContent = `₹${formatCurrency(monthlySavings)}`;
        solarCapacityElement.textContent = `${solarCapacity.toLocaleString('en-IN')} W`;
        energyElement.textContent = `${formatCurrency(monthlyEnergy)} kWh`;
        annualElement.textContent = `₹${formatCurrency(annualSavings)}`;
        tenYearElement.textContent = `₹${formatCurrency(tenYearSavings)}`;
        finalPriceElement.textContent = `₹${formatCurrency(finalPrice)}`;
    }

    // Add event listeners
    powerBillInput.addEventListener('input', updateCalculations);
    savingsRange.addEventListener('input', updateCalculations);

    // Initialize calculations
    updateCalculations();
}

// Initialize calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.capacity-container')) {
        initializeCapacityCalculator();
    }
});

// Function to store calculation data
function storeCalculationData(data) {
    localStorage.setItem('solarCalculation', JSON.stringify(data));
}

// Function to retrieve calculation data
function getCalculationData() {
    const data = localStorage.getItem('solarCalculation');
    return data ? JSON.parse(data) : null;
}

// Update the review button click handler in select-capacity.html
document.querySelector('.btn-review').addEventListener('click', function() {
    const calculationData = {
        capacityReserved: reservedSolar.textContent,
        monthlyCredits: monthlySavings.textContent,
        tenYearSavings: tenYearSavings.textContent,
        reservationCost: finalPayable.textContent.replace('₹', ''),
        gstAmount: (parseFloat(finalPayable.textContent.replace('₹', '').replace(/,/g, '')) * 0.18).toFixed(2)
    };
    
    storeCalculationData(calculationData);
    window.location.href = 'review.html';
});

// Load data in review.html if available
document.addEventListener('DOMContentLoaded', function() {
    const isReviewPage = window.location.pathname.includes('review.html');
    
    if (isReviewPage) {
        const data = getCalculationData();
        if (data) {
            document.getElementById('capacityReserved').textContent = data.capacityReserved;
            document.getElementById('monthlyCredits').textContent = data.monthlyCredits;
            document.getElementById('tenYearSavings').textContent = data.tenYearSavings;
            document.getElementById('reservationCost').textContent = `₹${data.reservationCost}`;
            document.getElementById('gstAmount').textContent = `₹${data.gstAmount}`;
            document.getElementById('finalPayable').textContent = 
                `₹${(parseFloat(data.reservationCost) + parseFloat(data.gstAmount)).toFixed(2)}`;
        }

        // Handle back button in review page
        document.querySelector('.back-btn').addEventListener('click', function() {
            window.location.href = 'select-capacity.html';
        });

        // Handle checkout button
        document.querySelector('.checkout-btn').addEventListener('click', function() {
            console.log('Proceeding to checkout...');
            // Add checkout logic here
        });
    }
});