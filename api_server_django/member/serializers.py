from rest_framework import serializers
# from tutorials.models import Tutorial
from . import models

# class TutorialSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Tutorial
#         fields = ('id',
#                   'title',
#                   'description',
#                   'published')
                  
class MemberSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = models.Member
        fields = ('email', 'nickname', 'role', 'is_active')

# and so on for other serizalizers