from learning_logs.models import Topic, Entry
from django import forms

class TopicForm(forms.ModelForm):
    class Meta:
        model = Topic
        fields = ['text']
        labels = {'text':'text'}
class EntryFrom(forms.ModelForm):
    class Meta:
        model = Entry
        fields = ['text']
        labels = {'text':'entry'}
        widgets = {'text' : forms.Textarea(attrs = {'cols':80})}
