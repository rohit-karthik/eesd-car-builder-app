<script>
    import { selectedDriveTrain } from "../data/stores";
    import RefillTech from "../modules/RefillTech.svelte";

    let selectedPower;
    
    selectedDriveTrain.subscribe(value => {
        selectedPower = value;
    });
</script>

<div
    class="border-2 border-neutral-400 rounded-md divide-y divide-neutral-300 w-full"
>   
    {#if selectedPower == "Gasoline" || selectedPower == "Diesel"}
    <RefillTech
        src="https://bit.ly/3lQpcwP"
        alt="Gas pump"
        type="Gas Pump"
        mainColor="bg-red-500"
        activeColor="active:bg-red-700"
        hoverColor="hover:bg-red-600"
        textColor="text-red-500"
        cost="3000"
        desc="The gas pump is an already existing infrastructure system that has tons of support from major oil companies like ExxonMobil. These pumps allow you to quickly fill up a gas or diesel powered car in around 5 minutes. There is a charge of $5000 here because of the volatile nature of gasoline/diesel, and safety precautions require money to set up."
    />
    {/if}
    {#if selectedPower == "Electric"}
    <RefillTech
        src="https://bit.ly/3KgSFtm"
        alt="Charging an EV"
        type="Electricity"
        mainColor="bg-emerald-500"
        activeColor="active:bg-emerald-700"
        hoverColor="hover:bg-emerald-600"
        textColor="text-emerald-500"
        cost="1500"
        desc="Electric charging stations are an easy and affordable way to get your electric car fully charged when on a long road trip. They are less expensive to set up and maintain than a gas pump. The cost here is very low because there is no need to rapidly expand charging stations very early on, as buyers can just charge their car from home."
    />
    {/if}
    {#if selectedPower == "Hydrogen"}
    <RefillTech
        src="https://bit.ly/3ziYYX2"
        alt="Hydrogen pump"
        type="Hydrogen Pump"
        mainColor="bg-blue-500"
        activeColor="active:bg-blue-700"
        hoverColor="hover:bg-blue-600"
        textColor="text-blue-500"
        cost="6500"
        desc="Hydrogen stations are extremely expensive to set up because of hydrogen's flammability and the expense required to transport hydrogen. As a hydrogen car manufacturer, you will need to put in substantial amounts of money to set up hydrogen infrastructure and bring it to the masses."
    />
    {/if}
    {#if selectedPower == "Synthetic Fuel"}
    <RefillTech
        src="https://bit.ly/3ZtJlXt"
        alt="Synthetic fuel pump"
        type="Synthetic Fuel"
        mainColor="bg-purple-500"
        activeColor="active:bg-purple-700"
        hoverColor="hover:bg-purple-600"
        textColor="text-purple-500"
        cost="5000"
        desc="This is a similar case to hydrogen: synthetic fuel is a very underrepresented fuel type, and infrastructure must be developed in order to bring synthetic fuel to the masses. However, it's a bit more affordable than hydrogen because synthetic fuel is decently similar to the gas pump, so new design doesn't need to be created."
    />
    {/if}
</div>
