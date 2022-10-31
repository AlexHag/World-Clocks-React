# React World Clocks

## A. Scenario

React is a hugely appreciated JavaScript library for frontend development. This doesn't mean that it's necessarily the best one (it's very good though), but it's very widely adopted and the concepts on which it is built appears in other frameworks as well. One of the core concepts of React is that it's component-based. Today we'll be exploring this topic by bulding a world clock SPA.

## B. What you will be working on today

In this exercise you will create an SPA with a set of independent clocks showing the time from different time zones.
Each clock should be an independent component with its own timer.

## C. Setup

Use [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to create a new project called `salt-world-clocks`. You may use either `yarn` or `npm` as your package manager. 

## D. Lab instructions

### Application Architecture

Your app should have _at least_ three components: **App**, **Board** and **Clock**.

#### Clock

The clock component represents a clock. It should have its own timer that updates the time every second. All the config, such as timezone and location name, should be passed in as props. Designing the clock this way will make the component reusable!

#### Board

The board component is a parent for all the clocks. You should pass in all the clock configurations to the board and it should create one clock for each config entry.

#### App

The App component is a root component for your application. This is where you set up the configuration for all your clocks before you hand it over to the Board. Any other decorational info, e.g. page header, should also go into this component.

| ![World Clocks](worldclocks.png) |
| :------------------------------: |
|    World Clocks architecture     |

### Mobile

Exactly how you design your World Clocks app is up to you and your mob, but the app should be reactive and work on both mobile and desktop.

<table>
  <tr>
    <td><img src="worldclocks-mobile.png"></td>
    <td><img src="worldclocks-desktop.png"></td>
  </tr>
  <tr>
    <td colspan="2">Example of mobile and desktop designs</td>
  </tr>
</table>

### JavaScript Date and Time

#### Date()

JavaScript comes with a standard `Date` object. To create a new Date instance based on the current time stamp, you simply type `const now = new Date();`.

##### Unix Epoch

In computing, we often refer to time relative to the _Unix Epoch Time_, which is the number of seconds since `1970-01-01T00:00:00.000Z`, and JavaScript is no different.

To get the date representation relative to Unix Epoch you do `const time = new Date().getTime()`, or `const time = Date.now()`.
This is the preferred way of storing a date in a database. (Don't fall into the trap of using the database vendor's own datetime format!)

You can also create a new Date instance from a Unix Epoch representation by passing that number into the constructor, like so `new Date(time)`.

##### ISO Format

The Unix Epoch format is not very readable, so when sending datetime via XML or JSON we should instead use the standard ISO format - `yyyy-MM-ddThh-mm-ss.SSSZ`, e.g. `2018-02-22T14:22.08.023Z`.
Producing such date string from the Date object is as easy as `new Date().toISOString()`.
Just as with the Unix Epoch, we can create a new Date instance from an ISO string `new Date(2018-02-22T14:22.08.023Z)`.

[Here](https://www.w3schools.com/jsref/jsref_obj_date.asp) is a good Date reference.

#### Third Party Date Libraries

The standard Date object in JavaScript can sometimes be a bit tricky to work with and there are third party libraries to help us. Previously, we used to use a library called [Moment](https://momentjs.com/) which was the de facto standard for advanced date management. Moment is however not being developed anymore (only maintained), and the developers of Moment themselves recommend using [other alternatives](https://momentjs.com/docs/#/-project-status/recommendations/). Feel free to use a third party date library if you want to.

### No - we don't do TDD today

Since you are moving into new ground with React, you don't have to write tests for this exercise. Instead you should concentrate on understanding the React concepts! You will however learn how to TDD with React very soon.

### Additional tasks

Add a input field to let the user add additional clocks based on city and timezone.

---

Good luck and have fun!
