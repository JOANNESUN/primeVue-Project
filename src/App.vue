<template>
  <div id="app" class="s-layout">
    <main class="s-layout__content">
      <h1>Full View, Please!</h1>
    </main>
    <div class="s-layout__sidebar">
      <a class="s-sidebar__trigger" href="#0">
        <i class="fa fa-bars"></i>
      </a>
      <!-- actual side bar -->
      <nav class="s-sidebar__nav">
        <ul>
          <li>
            <MultiSelect
              v-model="filter_items.selectedUsers"
              :options="filter_items.partner_users"
              optionLabel="name"
              placeholder="Select a user"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedSource"
              :options="filter_items.Source"
              placeholder="Select Source"
              display="chip"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedCampaign"
              :options="filter_items.Campaign"
              placeholder="Select Campaign"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedLender"
              :options="filter_items.lenders"
              optionLabel="lender_name"
              placeholder="Select a Lender"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedStatus"
              :options="filter_items.Status"
              placeholder="Select a Status"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedState"
              :options="filter_items.State"
              placeholder="Select a State"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedIndustry"
              :options="filter_items.Industry"
              placeholder="Select a Industry"
            />
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedPerpertyOwnership"
              :options="filter_items.PerpertyOwnership"
              placeholder="Home Ownership"
            />
          </li>
          <br />
          <!-- <li>
            <MultiSelect
              v-model="filter_items.selectedContract"
              :options="filter_items.ContractType"
              placeholder="Low Doc v. Full Doc"
            />
          </li>
          <br /> -->
          <li>
            <MultiSelect
              v-model="filter_items.selectedLoanPurpose"
              :options="filter_items.purpose"
              optionLabel="purpose_name"
              placeholder="Loan Purpose"
            />
          </li>
          <br />
          <li>
            <h5>Grouped</h5>
            <MultiSelect
              v-model="filter_items.selectedGroupedProduct"
              :options="filter_items.groupedProductType"
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
              placeholder="(G)Product Type"
            >
              <template #optiongroup="slotProps">
                <div>{{ slotProps.option.label }}</div>
              </template>
            </MultiSelect>
          </li>
          <br />
          <li>
            <MultiSelect
              v-model="filter_items.selectedEquipment"
              :options="filter_items.AssetTypeEquipment"
              placeholder="(G)Asset Type for Equipment"
            />
          </li>
          <br />
          <li>
            <h3>Asset Age: {{ filter_items.assetAge }} years</h3>
            <Slider v-model="filter_items.assetAge" />
          </li>
          <br />
          <li>
            <div class="p-fluid p-grid p-formgrid">
              <div class="p-field p-col-12 p-md-4">
                <div class="p-field p-col-12 p-md-4">
                  <label for="range">Range</label>
                  <Calendar
                    id="range"
                    v-model="filter_items.datesRange"
                    selectionMode="range"
                    :manualInput="false"
                    yearRange="2000:2060"
                  />
                </div>
              </div>
            </div>
          </li>
          <h4>group select</h4>
          <li>
            <Multigroupselect
              v-model="filter_items.selectedGroupedCities"
              :options="filter_items.groupedCities"
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
            >
            </Multigroupselect>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MultiSelect from "primevue/multiselect";
import Multigroupselect from "./multiGroupSelect";
export default {
  components: { MultiSelect, Multigroupselect },
  data() {
    return {
      filter_items: {
        datesRange: null,
        date7: null,

        assetAge: [0, 100],

        // selectedUsers: null,
        partner_users: [
          { partner_user_id: 418, name: "Robert Trevarrow" },
          { partner_user_id: 801, name: "Gary" },
          { partner_user_id: 814, name: "Nick Bluhdorn" },
          { partner_user_id: 859, name: "Erin Bluhdorn" },
          { partner_user_id: 923, name: "Eric Leao" },
          { partner_user_id: 961, name: "David Crook" }
        ],

        //contract type
        // selectedContract: null,
        // ContractType: ["Low Doc", "Full Doc", "Both"],

        //Source
        selectedSource: null,
        Source: ["APP", "LeanApp", "PartnerAPI", "Partners"],
        //Campaign
        selectedCampaign: null,
        Campaign: [
          "awler18",
          "awler23",
          "awler5",
          "BFJan",
          "projv19",
          "projv20",
          "projv21"
        ],
        //Lender
        selectedLender: null,
        lenders: [
          { lender_id: 1, lender_name: "Capify" },
          { lender_id: 3, lender_name: "GetCapital" },
          { lender_id: 5, lender_name: "Prospa" },
          { lender_id: 6, lender_name: "BusinessFuel" },
          { lender_id: 7, lender_name: "MaxFunding" },
          { lender_id: 8, lender_name: "OnDeck" },
          { lender_id: 9, lender_name: "Moula" },
          { lender_id: 10, lender_name: "Lumi" },
          { lender_id: 14, lender_name: "BizCap" },
          { lender_id: 15, lender_name: "Equipment" },
          { lender_id: 17, lender_name: "LimbaLoans" },
          { lender_id: 18, lender_name: "ABRFinance" },
          { lender_id: 19, lender_name: "HomeSec" },
          { lender_id: 20, lender_name: "StriveFinancial" },
          { lender_id: 23, lender_name: "YourManager" },
          { lender_id: 24, lender_name: "Lend Assisted" },
          { lender_id: 25, lender_name: "FinanceOne" },
          { lender_id: 26, lender_name: "ScotPac" },
          { lender_id: 27, lender_name: "InvoiceMoney" },
          { lender_id: 33, lender_name: "Banjo" }
        ],
        //Status
        selectedStatus: null,
        Status: ["Attempting", "In Progress", "Pending", "Rejected", "Settled"],
        //State
        selectedState: null,
        State: ["ACT", "NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT"],
        //   Industry Type
        selectedIndustry: null,
        Industry: [
          "Arts & Lifestyle",
          "Health & Fitness Centres, Gyms",
          "Movie, Film & Video Services",
          "Parks & Gardens",
          "Photographic Services",
          "Radio & TV Services"
        ],
        //property ownership
        selectedPerpertyOwnership: null,
        PerpertyOwnership: ["yes", "no"],
        //   product type => ub type

        //Asset Type for Equipment
        selectedEquipment: null,
        AssetTypeEquipment: [
          "Access Equipment",
          "Agriculture Equipment",
          "Agriculture Header",
          "Aircraft",
          "Articulated Truck > 12T / Prime Mover",
          "Asset Refurbishment"
        ],

        //loan purpose
        selectedLoanPurpose: null,
        purpose: [
          { purpose_id: 1, purpose_name: "Working Capital" },
          { purpose_id: 2, purpose_name: "Inventory" },
          { purpose_id: 3, purpose_name: "Equipment" },
          { purpose_id: 4, purpose_name: "Renovation" },
          { purpose_id: 5, purpose_name: "Unexpected Expenses" },
          { purpose_id: 6, purpose_name: "Hiring Staff" },
          { purpose_id: 7, purpose_name: "Tax" },
          { purpose_id: 8, purpose_name: "Other" },
          { purpose_id: 9, purpose_name: "To Start a New Business" },
          { purpose_id: 10, purpose_name: "Purchase Existing Business" },
          { purpose_id: 11, purpose_name: "Expansion" }
        ]
      }
    };
  },
  methods: {
    // onSelectAllChange(event) {
    //   this.selectedItems = event.checked
    //     ? this.items.map(item => item.value)
    //     : [];
    //   this.selectAll = event.checked;
    // },
    onChange(event) {
      this.selectAll = event.value.length === this.items.length;
    }
  },
  created() {
    //this.selectedCategory = this.categories[1];
    //date range
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
};
</script>

<style>
h3 {
  margin-inline-start: 0.5em;
}

.p-slider.p-slider-horizontal {
  margin-inline-start: 1em;
}

.p-slider {
  background: black;
}

.p-multiselect {
  width: 18rem;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item{
  top:13px;
  background:white;
}


/* Primary Styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  /* background-color: white; */
}

body {
  font-family: sans-serif;
  font-size: 1em;
  color: #333;
}

h1 {
  font-size: 1.4em;
}

em {
  font-style: normal;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Layout */
.s-layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.s-layout__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

/* Sidebar */
/* top-nav bar */
.s-sidebar__trigger {
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 4em;
  background: #f5cece;
}

.s-sidebar__trigger > i {
  display: inline-block;
  margin: 1.5em 0 0 1.5em;
  color: #f07ab0;
}

/* actual sidebar */
.s-sidebar__nav {
  position: fixed;
  top: 0;
  left: -18em;
  overflow: hidden;
  transition: all 0.3s ease-in;
  width: 18em;
  height: 100%;
  background: #e6e6e6;
  color: rgba(19, 18, 18, 0.7);
}

.s-sidebar__nav:hover,
.s-sidebar__nav:focus,
.s-sidebar__trigger:focus + .s-sidebar__nav,
.s-sidebar__trigger:hover + .s-sidebar__nav {
  left: 0;
}

.s-sidebar__nav ul {
  position: absolute;
  top: 4em;
  left: 0;
  margin: 0;
  padding: 0;
  width: 15em;
}

.s-sidebar__nav ul li {
  width: 100%;
}

/* Mobile First */
@media (min-width: 42em) {
  .s-sidebar__nav {
    width: 4em;
    left: 0;
  }

  .s-sidebar__nav:hover,
  .s-sidebar__nav:focus,
  .s-sidebar__trigger:hover + .s-sidebar__nav,
  .s-sidebar__trigger:focus + .s-sidebar__nav {
    width: 18em;
  }
}

@media (min-width: 48em) {
  .s-layout__content {
    margin-left: 18em;
  }
  /* Sidebar */
  .s-sidebar__trigger {
    display: none;
  }
  .s-sidebar__nav {
    width: 18em;
  }
  .s-sidebar__nav ul {
    top: 1.3em;
  }
}
</style>
