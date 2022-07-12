<template>
    <div>
        <input @click="isOptionsShow = true" type="text" id="myInput" @input="myFunction()"
            placeholder="Search for names.." title="Type in a name" autocomplete="off"
            class="rounded-xl ring-1 ring-black">
        <div v-show="isOptionsShow">
            <div class="absolute bg-white z-50 left-0 mx-8 sm:ml-40 right-0 sm:w-1/2">
                <div class="border-2 border-gray-600 h-80 overflow-scroll shadow-lg overflow-x-hidden py-8 rounded">
                    <ul id="myUL" class="bg-white">
                        <li v-for="product in products" :key="category" class="bg-white text-haval ">
                            <p><span class="text-haval">{{ product.category + '| ' }}</span>{{ product.label }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
 
<script setup>

let isOptionsShow = ref(false)
onMounted(() => {
    let specifiedElement = document.getElementById("myInput");
    document.addEventListener("click", (event) => {
        const isClickInside = specifiedElement.contains(event.target);

        if (!isClickInside) {
            console.log('test');
            isOptionsShow.value = false;
        }
    });
});
let products = reactive({
    p1: {
        label: 'Product one', value: 'p1', category: 'Signs '
    },
    p2: {
        label: 'Product tow', value: 'p2', category: 'Signs '
    },
    p3: {
        label: 'Product three', value: 'p3', category: 'Signs'
    },
    p4: {
        label: 'Product one2', value: 'p4', category: 'Products'
    },
    p5: {
        label: 'Product tow2', value: 'p5', category: 'Products'
    },
    p6: {
        label: 'Product three2', value: 'p6', category: 'Products'
    },
    p7: {
        label: 'Product three', value: 'p3', category: 'Signs'
    },
    p8: {
        label: 'Product one2', value: 'p4', category: 'Products'
    },
    p9: {
        label: 'Product tow2', value: 'p5', category: 'Products'
    },
    p10: {
        label: 'Product three2', value: 'p6', category: 'Products'
    },
    p11: {
        label: 'Product one', value: 'p1', category: 'Signs '
    },
    p12: {
        label: 'Product tow', value: 'p2', category: 'Signs '
    },
    p13: {
        label: 'Product three', value: 'p3', category: 'Signs'
    },
    p14: {
        label: 'Product one2', value: 'p4', category: 'Products'
    },
    p15: {
        label: 'Product tow2', value: 'p5', category: 'Products'
    },
    p16: {
        label: 'Product three2', value: 'p6', category: 'Products'
    },
    p17: {
        label: 'Product three', value: 'p3', category: 'Signs'
    },
    p18: {
        label: 'Product one2', value: 'p4', category: 'Products'
    },
    p19: {
        label: 'Product tow2', value: 'p5', category: 'Products'
    },
    p20: {
        label: 'Product three2', value: 'p6', category: 'Products'
    }
});


function myFunction() {
    console.log('clicked');
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    console.log(li.length);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

</script>

<style>
#myInput {
    /* background-image: url('/css/searchicon.png'); */
    background-position: 10px 12px;
    background-repeat: no-repeat;
    width: 100%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
}

#myUL {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

#myUL li p {
    border: 1px solid #ddd;
    margin-top: -1px;
    /* Prevent double borders */
    background-color: #f6f6f6;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block
}

#myUL li p:hover:not(.header) {
    background-color: #eee;
}
</style>