<script>
    import BodyStylePage from "../components/BodyStylePage.svelte";
    import DriveTrainsPage from "../components/DriveTrainsPage.svelte";
    import OtherCarFeatures from "../components/OtherCarFeatures.svelte";
    import RefuelPage from "../components/RefuelPage.svelte";
    import { selectedDriveTrain, driveTrainCost, bodyStyleCost, otherFeaturesCost } from "../data/stores";

    let selectedDriveTrainCost;
    let selectedDriveTrainValue;
    let selectedBodyStyleCost;
    let selectedFeaturesCost;

    driveTrainCost.subscribe(value => {
        selectedDriveTrainCost = value;
    });

    selectedDriveTrain.subscribe(value => {
        selectedDriveTrainValue = value;
    });

    bodyStyleCost.subscribe(value => {
        selectedBodyStyleCost = value;
    });

    otherFeaturesCost.subscribe(value => {
        selectedFeaturesCost = value;
    });

    $: getRefuelCost = () => {
        if (selectedDriveTrainValue == "Electric") {
            return 1500;
        } else if (selectedDriveTrainValue == "Hydrogen") {
            return 6500;
        } else if (selectedDriveTrainValue == "Synthetic Fuel") {
            return 5000;
        } else {
            return 3000;
        }
    }

    $: getTotalCost = () => {
        return selectedDriveTrainCost + getRefuelCost() + selectedBodyStyleCost + selectedFeaturesCost;
    }
    
</script>

<div class="p-24 pt-10">
    <div>
        <div class="w-9/12">
            <h1 class="text-3xl font-bold">
                Build a Car: A Vehicle Construction Simulator
            </h1>
            <ul class="justify-start list-disc">
                <div class="p-2" />
                <li>
                    Welcome to this car simulator! This website allows you to
                    pick different aspects of cars that each have a particular
                    monetary volue.
                </li>
                <li>
                    This simulator focuses on the environmental considerations
                    of car construction. As such, you can pick the drivetrain
                    type, fueling/charging technology, and body style.
                </li>
                <li>
                    You can also pick color choices that your consumers can choose
                    from, and the technology and comfort features that your car
                    will offer.
                </li>
                <li>
                    The goal of this simulator is to build a car that is as
                    environmentally friendly as possible, while still being
                    affordable to consumers.
                </li>
                <li>
                    For more information on each part, click the "i" icon next
                    to the part name. Click the "i" again to make it go away.
                </li>
            </ul>
            <div class="p-2" />
            <p class="text-xl">Drivetrain Cost: ${selectedDriveTrainCost}</p>
            <p class="text-xl">Refill Technology Cost: ${getRefuelCost()}</p>
            <p class="text-xl">Body Style Cost: ${selectedBodyStyleCost}</p>
            <p class="text-xl">Other Features Cost: ${selectedFeaturesCost}</p>
            <p class="text-xl font-bold">Total Vehicle Cost: ${getTotalCost()}</p>
            <div class="flex flex-col gap-5 lg:flex-row">
                <DriveTrainsPage />
                <RefuelPage />
            </div>
            <div class="p-2" />
            <div class="flex flex-col gap-5 lg:flex-row">
                <BodyStylePage />
                <OtherCarFeatures />
            </div>
        </div>
    </div>
</div>

<style>
</style>
