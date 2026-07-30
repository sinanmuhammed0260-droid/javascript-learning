let a = [1, 2, 3, 4, 5, 6, 7, 8]

for (i = 0; i < a.length; i++) {

    if (a[i] % 2 == 0) {
        a[i] = -1

    }
}
alert(a)