from flask import Flask, render_template, request
import os

application = Flask(__name__)

# Dictionary with all the different cours data 
items = [
    {'name': 'Certified Full Stack web & Software Engineer', 'description': 'Learn to create complex and powerful software, apps, and websites in our most advanced Immersive bootcamp.', 'category': 'online', 'part': 12, 'full': 6},
    {'name': 'Software Engineer bootcamp', 'description': 'Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.', 'category': 'online', 'part': 6, 'full': 3},
    {'name': 'Data Scientist bootcamp', 'description': 'Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.', 'category': 'online', 'part': 6, 'full': 3},
    {'name': 'Full Stack Web Developer bootcamp', 'description': 'Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.', 'category': 'online', 'part': 6, 'full': 3},
    {'name': 'Stellenbosch University Web Development Bootcamp', 'description': 'Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.', 'category': 'uni', 'part': 6, 'full': 3},
    {'name': 'Stellenbosch University Software Engineering Bootcamp', 'description': 'Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.', 'category': 'uni', 'part': 6, 'full': 3},
    {'name': 'Stellenbosch University Data Science Bootcamp', 'description': 'Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.', 'category': 'uni', 'part': 6, 'full': 3},
    {'name': 'Software Engineer bootcamp', 'description': 'Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.', 'category': 'onsite', 'part': 0, 'full': 3},
]

# Render home page
@application.route('/')
def home():

    # Create a list with brand images from static folder and save into dictionary for brands section
    static_path = os.path.join(application.root_path, 'static/images/brands')
    image_filenames = [filename for filename in os.listdir(static_path) if filename.endswith(('.jpg', '.png', '.gif'))]

    # Adds prefix to images in order to render properly in template
    prefixed_image_filenames = ['images/brands/' + filename for filename in image_filenames]

    # Filter items based on category = can be rendered dynamically too
    filtered_online = [item for item in items if item['category'] == 'online']
    filtered_uni = [item for item in items if item['category'] == 'uni']
    filtered_onsite = [item for item in items if item['category'] == 'onsite']

    return render_template('index.html', image_filenames=prefixed_image_filenames, items=filtered_online, uni=filtered_uni, onsite=filtered_onsite)

# Render additional pages - Ideally with Booleans
@application.route('/additional')
def additional():
    return render_template('additional.html')


# Render contact page 
@application.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    application.run(debug=False)