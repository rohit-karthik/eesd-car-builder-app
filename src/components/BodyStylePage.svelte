<script>
    import BodyStyle from "../modules/BodyStyle.svelte";
</script>

<div
    class="border-2 border-neutral-400 rounded-md divide-y divide-neutral-300 w-full"
>
    <BodyStyle
        src="https://bit.ly/3ZmzvXn"
        alt="Sedan"
        type="Sedan"
        mainColor="bg-red-500"
        activeColor="active:bg-red-700"
        hoverColor="hover:bg-red-600"
        textColor="text-red-500"
        cost="5000"
        desc="The sedan is the typical 'car' body style that you see on the road. It has an engine up front, a small cabin that seats 5 people, and a trunk to store cargo. This design results in generally smaller vehicles. While this design is cheaper to produce due to its 'basic' style, the demand for this design is diminishing, as people want larger cars."
    />
    <BodyStyle
        src="https://bit.ly/40GuuK6"
        alt="SUV"
        type="Sport Utility Vehicle (SUV)"
        mainColor="bg-emerald-500"
        activeColor="active:bg-emerald-700"
        hoverColor="hover:bg-emerald-600"
        textColor="text-emerald-500"
        cost="8250"
        desc="SUVs are a taller, generally boxier version of the sedan. They feature a 'two-box' design, with one smaller one for the engine and a larger one for the cabin. SUVs have larger cabins that feel more airy inside, and customers in the current market are trending towards this body style. However, more materials are needed for a larger cabin, and so the SUV is more expensive."
    />
    <BodyStyle
        src="https://bit.ly/40thgAT"
        alt="Minivan"
        type="Minivan"
        mainColor="bg-blue-500"
        activeColor="active:bg-blue-700"
        hoverColor="hover:bg-blue-600"
        textColor="text-blue-500"
        cost="9000"
        desc="Minivans are large, boxy vehicles that have sliding doors in the back instead of normal doors. These cars are intended for practicality and families, as they can fit 7+ people and all their things as well. Minivans are much larger than sedans and SUVs, and so they are quite a bit more expensive to make."
    />
    <BodyStyle
        src="https://bit.ly/42UY28H"
        alt="Pickup Truck"
        type="Pickup Truck"
        mainColor="bg-orange-500"
        activeColor="active:bg-orange-700"
        hoverColor="hover:bg-orange-600"
        textColor="text-orange-500"
        cost="12000"
        desc="Pickup trucks are the classic commercial vehicle, with an open 'bed' in back rather than passenger space. These trucks are large vehicles that can carry a lot of things because of the bed. Because of their size, they are the most expensive model. They are also the most popular vehicle type in the United States as many people like the 'high-riding' attribute of trucks."
    />
    <BodyStyle
        src="https://bit.ly/3nr5ZSV"
        alt="Hatchback/Wagon"
        type="Hatchback or Wagon"
        mainColor="bg-purple-500"
        activeColor="active:bg-purple-700"
        hoverColor="hover:bg-purple-600"
        textColor="text-purple-500"
        cost="7000"
        desc="Hatchbacks and wagons combine the size of a sedan with the looks of an SUV; ultimately, they are a combination of the sedan's size and affordability, and the SUV's 'two-box' (one for the engine, one for the cabin) design. Because these are generally not as popular as other body styles, there is a price premium for the development of this body style, but their smaller sizes help keep the cost relatively low."
    />
</div>
