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
        desc="The gasoline BodyStyle is used in most cars on US roads today. It is extremely convenient to use because of fast fill up time and existing infrastructure. They are also relatively affordable to build. However, they are the most environmentally unfriendly as they have the worst emissions of any powertrain type."
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
        desc="The electric drive train, a more environmentally friendly solution, has gained a lot of traction over the past decade via companies like Tesla. The electric BodyStyle has fewer components than the gas one, but is more expensive to build via the large amount of battery required to run the car. Keep in mind that electric cars aren't 100% pure, as electricity generation can use fossil fuels. They also take at least 45 min to charge fully."
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
        desc="Hydrogen is a compelling solution that combines the speed of filling up (similar to a gas car) and the purity of an electric car. However, hydrogen is an extremely expensive solution because of the hydrogen tanks that are required to be stored in the car, and the fuel cell synthesis process happening under the hood. Additionally, the cost is so high here because a completely new infrastructure system must be established, and money must be invested into it."
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
        desc="Diesel is an alternative fossil fuel to gasoline that is generally used in larger trucks because  its main benefits come during long distance driving. Diesel contains 12% more energy than gasoline, and emits a little less CO2. Diesel engines can also be used for longer than gas ones. However, diesel's drawback is that it pollutes a lot of NOx and particulate matter. It's also a little more expensive for manufacturers to make. Finally, it's also nowhere near as environmentally friendly as electric or hydrogen."
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
        desc="Synthetic fuels are an interesting option that hasn't had much research done into it yet. They are a direct replacement for gasoline that aims to be carbon neutral. This fuel is generally used in niche cases (race cars or vintage vehicles). As such, this is a very expensive option as it requires a lot of company research and brand new infrastructure to support it."
    />
</div>
