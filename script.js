// Filter configurations
const filterConfigs = {
  amount_spent: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
      { value: ">", label: "Greater than" },
      { value: "<", label: "Less than" },
      { value: ">=", label: "Greater or equal to" },
      { value: "<=", label: "Less or equal to" },
      { value: "BETWEEN", label: "Between" },
    ],
    type: "number",
    hasCurrency: true,
  },
  customer_account_status: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
    ],
    values: [
      { value: "DECLINED", label: "Declined" },
      { value: "DISABLED", label: "Disabled" },
      { value: "ENABLED", label: "Enabled" },
      { value: "INVITED", label: "Invited" },
    ],
  },
  customer_email_domain: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
      { value: "IS NULL", label: "Does not exist" },
      { value: "IS NOT NULL", label: "Exists" },
    ],
    values: [
      { value: "gmail.com", label: "Gmail" },
      { value: "yahoo.com", label: "Yahoo" },
      { value: "hotmail.com", label: "Hotmail" },
      { value: "aol.com", label: "AOL" },
      { value: "outlook.com", label: "Outlook" },
      { value: "icloud.com", label: "iCloud" },
    ],
  },
  customer_language: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
    ],
    values: [
      { value: "en", label: "English" },
      { value: "fr", label: "French" },
      { value: "es", label: "Spanish" },
      { value: "de", label: "German" },
      { value: "it", label: "Italian" },
      { value: "ja", label: "Japanese" },
      { value: "pt", label: "Portuguese" },
      { value: "ru", label: "Russian" },
    ],
  },
  customer_tags: {
    operators: [
      { value: "CONTAINS", label: "Contains" },
      { value: "NOT CONTAINS", label: "Does not contain" },
      { value: "IS NULL", label: "Does not exist" },
      { value: "IS NOT NULL", label: "Exists" },
    ],
    type: "text",
  },
  last_order_date: {
    operators: [
      { value: "=", label: "Exactly on date" },
      { value: "!=", label: "Not on date" },
      { value: ">=", label: "On or after date" },
      { value: "<=", label: "On or before date" },
      { value: ">", label: "After date" },
      { value: "<", label: "Before date" },
      { value: "BETWEEN", label: "Between dates" },
      { value: "IS NULL", label: "Does not exist" },
      { value: "IS NOT NULL", label: "Exists" },
    ],
    type: "date",
    hasDateRange: true,
    dateShortcuts: [
      { value: "today", label: "Today" },
      { value: "yesterday", label: "Yesterday" },
      { value: "7_days_ago", label: "Last 7 days" },
      { value: "30_days_ago", label: "Last 30 days" },
      { value: "90_days_ago", label: "Last 90 days" },
      { value: "12_months_ago", label: "Last 12 months" },
    ],
  },
  number_of_orders: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
      { value: ">", label: "Greater than" },
      { value: "<", label: "Less than" },
      { value: ">=", label: "Greater or equal to" },
      { value: "<=", label: "Less or equal to" },
      { value: "BETWEEN", label: "Between" },
    ],
    type: "number",
  },
  rfm_group: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
    ],
    values: [
      { value: "CHAMPIONS", label: "Champions" },
      { value: "LOYAL", label: "Loyal" },
      { value: "PROMISING", label: "Promising" },
      { value: "AT_RISK", label: "At Risk" },
      { value: "NEEDS_ATTENTION", label: "Needs Attention" },
      { value: "DORMANT", label: "Dormant" },
      { value: "PROSPECTS", label: "Prospects" },
    ],
  },
  customer_cities: {
    operators: [
      { value: "CONTAINS", label: "Contains" },
      { value: "NOT CONTAINS", label: "Does not contain" },
      { value: "IS NULL", label: "Does not exist" },
      { value: "IS NOT NULL", label: "Exists" },
    ],
    type: "text",
    placeholder: "Enter city name (e.g., US-NY-NewYorkCity)",
  },
  customer_countries: {
    operators: [
      { value: "CONTAINS", label: "Contains" },
      { value: "NOT CONTAINS", label: "Does not contain" },
      { value: "IS NULL", label: "Does not exist" },
      { value: "IS NOT NULL", label: "Exists" },
    ],
    values: [
      { value: "US", label: "United States" },
      { value: "CA", label: "Canada" },
      { value: "GB", label: "United Kingdom" },
      { value: "AU", label: "Australia" },
      { value: "DE", label: "Germany" },
      { value: "FR", label: "France" },
      { value: "IT", label: "Italy" },
      { value: "ES", label: "Spain" },
      { value: "JP", label: "Japan" },
    ],
  },
  email_subscription_status: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
    ],
    values: [
      { value: "SUBSCRIBED", label: "Subscribed" },
      { value: "NOT_SUBSCRIBED", label: "Not Subscribed" },
      { value: "PENDING", label: "Pending" },
      { value: "INVALID", label: "Invalid" },
    ],
  },
  sms_subscription_status: {
    operators: [
      { value: "=", label: "Is equal to" },
      { value: "!=", label: "Is not equal to" },
    ],
    values: [
      { value: "SUBSCRIBED", label: "Subscribed" },
      { value: "UNSUBSCRIBED", label: "Unsubscribed" },
      { value: "NOT_SUBSCRIBED", label: "Never Subscribed" },
      { value: "REDACTED", label: "Redacted" },
      { value: "PENDING", label: "Pending" },
    ],
  },
};

// Track current conditions
let currentConditions = [];

// Update filter options when filter type changes
function updateFilterOptions() {
  const filterType = document.getElementById("filterType").value;
  const filterOptions = document.getElementById("filterOptions");
  filterOptions.innerHTML = "";

  if (!filterType) return;

  const config = filterConfigs[filterType];

  // Add operator select if the filter has operators
  if (config.operators) {
    const operatorDiv = document.createElement("div");
    operatorDiv.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-2">Operator</label>
            <select id="operator" class="w-full p-2 border border-gray-300 rounded-md">
                ${config.operators
                  .map(
                    (op) => `<option value="${op.value}">${op.label}</option>`
                  )
                  .join("")}
            </select>
        `;
    filterOptions.appendChild(operatorDiv);

    // Add event listener for operator changes
    const operatorSelect = operatorDiv.querySelector("select");
    operatorSelect.addEventListener("change", function () {
      const value2Container = document.getElementById("value2Container");
      if (value2Container) {
        value2Container.style.display =
          this.value === "BETWEEN" ? "block" : "none";
      }

      // Hide value input for IS NULL/IS NOT NULL
      const valueContainer = document.getElementById("valueContainer");
      if (valueContainer) {
        valueContainer.style.display =
          this.value === "IS NULL" || this.value === "IS NOT NULL"
            ? "none"
            : "block";
      }
    });
  }

  // Add value input unless it's a null operator
  const valueDiv = document.createElement("div");
  valueDiv.id = "valueContainer";
  valueDiv.classList.add("mt-4");

  if (config.values) {
    // Dropdown for predefined values
    valueDiv.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-2">Value</label>
            <select id="value" class="w-full p-2 border border-gray-300 rounded-md">
                ${config.values
                  .map((v) => `<option value="${v.value}">${v.label}</option>`)
                  .join("")}
            </select>
        `;
  } else {
    // Input field for custom values
    valueDiv.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-2">Value</label>
            <input type="${config.type}" 
                   id="value" 
                   class="w-full p-2 border border-gray-300 rounded-md"
                   ${
                     config.placeholder
                       ? `placeholder="${config.placeholder}"`
                       : ""
                   }>
        `;
  }
  filterOptions.appendChild(valueDiv);

  // Add second value input for BETWEEN operator
  if (config.operators?.some((op) => op.value === "BETWEEN")) {
    const value2Div = document.createElement("div");
    value2Div.id = "value2Container";
    value2Div.classList.add("mt-4");
    value2Div.style.display = "none";
    value2Div.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-2">End Value</label>
            <input type="${config.type}" 
                   id="value2" 
                   class="w-full p-2 border border-gray-300 rounded-md"
                   ${
                     config.placeholder
                       ? `placeholder="${config.placeholder}"`
                       : ""
                   }>
        `;
    filterOptions.appendChild(value2Div);
  }

  // Add date shortcuts if applicable
  if (config.type === "date" && config.dateShortcuts) {
    const dateShortcutsDiv = document.createElement("div");
    dateShortcutsDiv.classList.add("mt-4");
    dateShortcutsDiv.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-2">Quick Date Selections</label>
            <select id="dateShortcut" class="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Choose a preset...</option>
                ${config.dateShortcuts
                  .map(
                    (ds) => `<option value="${ds.value}">${ds.label}</option>`
                  )
                  .join("")}
            </select>
        `;
    filterOptions.appendChild(dateShortcutsDiv);

    // Add event listener for date shortcuts
    const dateShortcutSelect = dateShortcutsDiv.querySelector("select");
    dateShortcutSelect.addEventListener("change", function () {
      if (this.value) {
        const valueInput = document.getElementById("value");
        const today = new Date();
        let date;

        switch (this.value) {
          case "today":
            date = today;
            break;
          case "yesterday":
            date = new Date(today);
            date.setDate(date.getDate() - 1);
            break;
          case "7_days_ago":
            date = new Date(today);
            date.setDate(date.getDate() - 7);
            break;
          case "30_days_ago":
            date = new Date(today);
            date.setDate(date.getDate() - 30);
            break;
          case "90_days_ago":
            date = new Date(today);
            date.setDate(date.getDate() - 90);
            break;
          case "12_months_ago":
            date = new Date(today);
            date.setMonth(date.getMonth() - 12);
            break;
          default:
            date = new Date(this.value);
        }

        // Format date as YYYY-MM-DD
        const formattedDate = date.toISOString().split("T")[0];
        valueInput.value = formattedDate;

        // If we have a BETWEEN operator and a second date input, set it to today
        const operator = document.getElementById("operator")?.value;
        const value2Input = document.getElementById("value2");
        if (operator === "BETWEEN" && value2Input) {
          value2Input.value = today.toISOString().split("T")[0];
        }
      }
    });
  }

  // Add currency selection if needed
  if (config.hasCurrency) {
    const currencyDiv = document.createElement("div");
    currencyDiv.classList.add("mt-4");
    currencyDiv.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select id="currency" class="w-full p-2 border border-gray-300 rounded-md">
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
            </select>
        `;
    filterOptions.appendChild(currencyDiv);
  }
}

// Generate a single condition based on current form values
function generateCondition() {
  const filterType = document.getElementById("filterType").value;
  if (!filterType) return "";

  const config = filterConfigs[filterType];
  let condition = "";

  const operator = document.getElementById("operator")?.value;
  const value = document.getElementById("value")?.value;

  // Special handling for NULL operators
  if (operator === "IS NULL" || operator === "IS NOT NULL") {
    return `${filterType} ${operator}`;
  }

  condition = `${filterType} ${operator} `;

  if (operator === "BETWEEN" && document.getElementById("value2")) {
    const value2 = document.getElementById("value2").value;
    condition += `${formatValue(value, config)} AND ${formatValue(
      value2,
      config
    )}`;
  } else {
    condition += formatValue(value, config);
  }

  // Add currency comment if applicable
  const currencySelect = document.getElementById("currency");
  if (currencySelect && config.hasCurrency) {
    condition += ` /* Currency: ${currencySelect.value} */`;
  }

  return condition;
}

// Format value based on filter configuration
function formatValue(value, config) {
  if (!value) return "";

  // Add quotes for text values and predefined values
  if (config.values || config.type === "text" || config.type === "date") {
    return `'${value}'`;
  }

  return value;
}

// Add condition to the current list
function addCondition(operator = null) {
  const condition = generateCondition();
  if (condition) {
    if (operator && currentConditions.length > 0) {
      currentConditions.push(operator);
    }
    currentConditions.push(condition);
    updateCurrentConditions();
  }
}

// Update the display of current conditions
function updateCurrentConditions() {
  const container = document.getElementById("currentConditions");
  container.innerHTML = "";

  currentConditions.forEach((item, index) => {
    const div = document.createElement("div");
    if (item === "AND" || item === "OR") {
      div.classList.add("py-1", "text-center");
      div.innerHTML = `
                <span class="px-4 py-1 rounded-full ${
                  item === "AND"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-orange-100 text-orange-800"
                } font-medium text-sm">
                    ${item}
                </span>
            `;
    } else {
      div.classList.add(
        "p-2",
        "bg-gray-100",
        "rounded-md",
        "flex",
        "justify-between",
        "items-center"
      );
      div.innerHTML = `
                <code class="text-sm">${item}</code>
                <button class="text-red-600 hover:text-red-800 ml-2" onclick="removeCondition(${index})">
                    Remove
                </button>
            `;
    }
    container.appendChild(div);
  });
}

// Remove condition from the list
function removeCondition(index) {
  // Remove the condition and any adjacent operator
  if (
    index > 0 &&
    (currentConditions[index - 1] === "AND" ||
      currentConditions[index - 1] === "OR")
  ) {
    currentConditions.splice(index - 1, 2);
  } else if (
    index < currentConditions.length - 1 &&
    (currentConditions[index + 1] === "AND" ||
      currentConditions[index + 1] === "OR")
  ) {
    currentConditions.splice(index, 2);
  } else {
    currentConditions.splice(index, 1);
  }
  updateCurrentConditions();
}

// Generate the complete filter
function generateCompleteFilter() {
  document.getElementById("output").textContent = currentConditions.join(" ");
}

// Event Listeners
document
  .getElementById("filterType")
  .addEventListener("change", updateFilterOptions);
document
  .getElementById("addConditionBtn")
  .addEventListener("click", () => addCondition());
document
  .getElementById("addAndBtn")
  .addEventListener("click", () => addCondition("AND"));
document
  .getElementById("addOrBtn")
  .addEventListener("click", () => addCondition("OR"));
document
  .getElementById("generateCompleteFilter")
  .addEventListener("click", generateCompleteFilter);
