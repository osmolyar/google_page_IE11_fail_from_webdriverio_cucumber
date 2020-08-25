Feature: My Account
    As a logged in user I can access my bookings, profile, newsletters and so on

    @WIP
    Scenario Outline: As a logged in user when I view my account page I can access <area>
        Given the user is on their account page
        When the user selects to access <area>
        Then the user will see the <area>
        Examples:
            | area         |
#            | "bookings"   |
            # | "my profile" |
            # | "wishlist"   |
            # | "newsletter" |
