<script>
    import { otherFeatures, otherFeaturesCost } from "../data/stores";

    export let src;
    export let alt;
    export let type;
    export let mainColor;
    export let hoverColor;
    export let activeColor;
    export let cost;
    export let desc;
    export let textColor;

    let enabled = false;

    let otherFeaturesValue;

    otherFeatures.subscribe((value) => {
        otherFeaturesValue = value;
    });

</script>

<div>
    <div class="flex gap-4 pl-1 items-center">
        <div>
            <img {src} {alt} width="125" height="125" />
        </div>
        <div>
            <p>{type}</p>
        </div>

        <div>
            <button
                on:click={() => {
                    enabled = !enabled;
                }}
            >
                <i class="material-icons">info</i>
            </button>
        </div>

        <div>
            {#if otherFeaturesValue.includes(type)}
                <button
                    class={textColor}
                    on:click={() => {
                        delete otherFeaturesValue[otherFeaturesValue.indexOf(type)];
                        otherFeatures.set(otherFeaturesValue);
                        otherFeaturesCost.update((n) => n - parseInt(cost));
                    }}
                >
                    <p>Remove</p>
                </button>
            {:else}
                <button
                    class="{mainColor} text-white p-1 rounded-sm {hoverColor} transition {activeColor}"
                    on:click={() => {
                        otherFeaturesValue.push(type);
                        otherFeatures.set(otherFeaturesValue);
                        otherFeaturesCost.update((n) => n + parseInt(cost));
                        console.log("why")
                    }}
                >
                    <p>Select</p>
                </button>
            {/if}
        </div>
        <div>
            <p>Cost: ${cost}</p>
        </div>
    </div>

    {#if enabled}
        <div class="p-2">
            <p>{desc}</p>
        </div>
    {/if}
</div>
