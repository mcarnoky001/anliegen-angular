from django.test import TestCase
from rest_framework.test import APITestCase

from django.contrib.auth import get_user_model
from api.models import Task

User = get_user_model()


class TaskTestCase(APITestCase):
    def setUp(self):
        user = User.objects.create(username='testuser', email='test@test.com')
        user.set_password('randompass')
        user.save()
        task = Task.objects.create(
                user=user,
                name='Test task',
                description='Description of testing task.',
                contractId=33234,
                status=1
                )

    def test_single_user(self):
        user_count = User.objects.count()
        self.assertEqual(user_count, 1)

    def test_single_task(self):
        task_count = Task.objects.count()
        self.assertEqual(task_count, 1)

    # def test_get_list(self):
    #     # test the get list
    #     data = {}
    #     url = api_reverse("api-postings:post-listcreate")
    #     response = self.client.get(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     # print(response.data)
    #
    # def test_post_item(self):
    #     # test the get list
    #     data = {"title": "Some rando title", "content": "some more content"}
    #     url = api_reverse("api-postings:post-listcreate")
    #     response = self.client.post(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    #
    #
    # def test_get_item(self):
    #     # test the get list
    #     blog_post = BlogPost.objects.first()
    #     data = {}
    #     url = blog_post.get_api_url()
    #     response = self.client.get(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #
    # def test_update_item(self):
    #     # test the get list
    #     blog_post = BlogPost.objects.first()
    #     url = blog_post.get_api_url()
    #     data = {"title": "Some rando title", "content": "some more content"}
    #     response = self.client.post(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
    #     response = self.client.put(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    #
    #
    # def test_update_item_with_user(self):
    #     # test the get list
    #     blog_post = BlogPost.objects.first()
    #     #print(blog_post.content)
    #     url = blog_post.get_api_url()
    #     data = {"title": "Some rando title", "content": "some more content"}
    #     user_obj = User.objects.first()
    #     payload  = payload_handler(user_obj)
    #     token_rsp = encode_handler(payload)
    #     self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token_rsp) # JWT <token>
    #     response = self.client.put(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     #print(response.data)
    #
    # def test_post_item_with_user(self):
    #     # test the get list
    #     user_obj = User.objects.first()
    #     payload  = payload_handler(user_obj)
    #     token_rsp = encode_handler(payload)
    #     self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token_rsp)
    #     data = {"title": "Some rando title", "content": "some more content"}
    #     url = api_reverse("api-postings:post-listcreate")
    #     response = self.client.post(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    #
    #
    # def test_user_ownership(self):
    #     # test the get list
    #     owner = User.objects.create(username='testuser22222')
    #     blog_post = BlogPost.objects.create(
    #             user=owner,
    #             title='New title',
    #             content='some_random_content'
    #             )
    #
    #     user_obj            = User.objects.first()
    #     self.assertNotEqual(user_obj.username, owner.username)
    #     payload             = payload_handler(user_obj)
    #     token_rsp           = encode_handler(payload)
    #     self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token_rsp)
    #     url = blog_post.get_api_url()
    #     data = {"title": "Some rando title", "content": "some more content"}
    #     response = self.client.put(url, data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
    #
    # def test_user_login_and_update(self):
    #     data = {
    #         'username': 'testcfeuser',
    #         'password': 'somerandopassword'
    #     }
    #     url = api_reverse("api-login")
    #     response = self.client.post(url, data)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     token = response.data.get("token")
    #     if token is not None:
    #         blog_post = BlogPost.objects.first()
    #         #print(blog_post.content)
    #         url = blog_post.get_api_url()
    #         data = {"title": "Some rando title", "content": "some more content"}
    #         self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token) # JWT <token>
    #         response = self.client.put(url, data, format='json')
    #         self.assertEqual(response.status_code, status.HTTP_200_OK)






# request.post(url, data, headers={"Authorization": "JWT " + <token> })
