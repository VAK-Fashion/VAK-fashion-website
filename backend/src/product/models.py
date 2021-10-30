from django.db import models
import uuid
"""
{
image1: 'static/assets/images/product-images/product-image1.jpg',
image2: 'static/assets/images/product-images/product-image1-1.jpg',
onSale: {
    is: true,
    label: "new",
},
countdon: {
    is: true,
    end: "2022/03/01",
},
name: "Edna Dress",
price: {
    old: "500",
    new: "600",
},
},

"""


class Product(models.Model):
    image = models.ImageField(
        uploade_to='static/assets/images/product-images/')
    image2 = models.ImageField(
        uploade_to='static/assets/images/product-images/')
    onSale_is = models.BooleanField(default=False)
    onSale_label = models.CharField(max_length=50, null=True, blank=True)
    name = models.CharField(max_length=50, null=False,
                            blank=False, unique=True)
    price_old = models.IntegerField(blank=True, null=True)
    price_new = models.IntegerField(blank=False, null=False)
