<script>
    import { bodyStyle, bodyStyleCost } from "../data/stores";

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

    let bodyStyleValue;

	bodyStyle.subscribe(value => {
		bodyStyleValue = value;
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
            <button on:click={() => {
                enabled = !enabled;
            }}>
                <i class="material-icons">info</i>
            </button>
        </div>

        <div>
            {#if bodyStyleValue == type}
            <button
                class="{textColor}"
                >
                <p>Selected</p>
            </button>
            {:else}
            <button
                class="{mainColor} text-white p-1 rounded-sm {hoverColor} transition {activeColor}"
                on:click={() => {
                    bodyStyle.set(type);
                    bodyStyleCost.set(parseInt(cost));
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
