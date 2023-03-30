<script>
    export let src;
    export let alt;
    export let type;
    export let cost;
    export let desc;
</script>

<div>
    <div class="flex gap-4 pl-1 items-center">
        <div>
            <img {src} {alt} width="125" height="125" />
        </div>
        <div>
            <p>{type} Refueling</p>
        </div>

        <div>
            <p>Cost: ${cost}</p>
        </div>

    </div>

        <div class="p-2">
            <p>{desc}</p>
        </div>
</div>
